import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Edit3, Plus, Trash2, LogIn, LogOut, Video, Type, Tag, X } from 'lucide-react';
import { auth, db } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp, updateDoc } from 'firebase/firestore';

const categories = ["Social Media Ads", "Reels Editing", "Cinematic Edits", "YouTube Content"];

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

const handleFirestoreError = (error: unknown, operationType: OperationType, path: string | null) => {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
};

export const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: categories[0],
    videoUrl: '',
    description: ''
  });

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const unsubscribeFirestore = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeFirestore();
    };
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), {
          ...formData,
          updatedAt: serverTimestamp()
        });
        alert("Project updated successfully!");
      } else {
        await addDoc(collection(db, 'projects'), {
          ...formData,
          uid: user.uid,
          createdAt: serverTimestamp()
        });
        alert("Project added successfully!");
      }
      resetForm();
    } catch (error) {
      handleFirestoreError(error, editingId ? OperationType.UPDATE : OperationType.CREATE, 'projects');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: categories[0],
      videoUrl: '',
      description: ''
    });
    setEditingId(null);
  };

  const handleEdit = (project: any) => {
    setFormData({
      title: project.title,
      category: project.category,
      videoUrl: project.videoUrl,
      description: project.description || ''
    });
    setEditingId(project.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteDoc(doc(db, 'projects', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `projects/${id}`);
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-mono text-white/40">Loading Admin...</div>;

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center px-6">
        <div className="glass p-12 rounded-[3rem] text-center max-w-md w-full">
          <h2 className="text-4xl font-bold mb-8 tracking-tighter">ADMIN ACCESS</h2>
          <p className="text-white/60 mb-10">Sign in with your Google account to manage your portfolio projects.</p>
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-accent hover:text-white transition-all"
          >
            <LogIn size={20} /> Sign In with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-20">
        <div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Dashboard</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">MANAGE VIDEOS</h2>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Add Project Form */}
        <div className="lg:col-span-1">
          <div className="glass p-8 rounded-3xl sticky top-32">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                {editingId ? <Edit3 size={24} className="text-accent" /> : <Plus size={24} className="text-accent" />}
                {editingId ? 'Edit Project' : 'Add New Project'}
              </h3>
              {editingId && (
                <button 
                  onClick={resetForm}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/40 ml-2 flex items-center gap-1">
                  <Type size={10} /> Title
                </label>
                <input 
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm"
                  placeholder="Project Title"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/40 ml-2 flex items-center gap-1">
                  <Tag size={10} /> Category
                </label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm appearance-none"
                >
                  {categories.map(cat => <option key={cat} value={cat} className="bg-[#050505]">{cat}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/40 ml-2 flex items-center gap-1">
                  <Video size={10} /> Video URL
                </label>
                <input 
                  required
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm"
                  placeholder="YouTube or Google Drive Link"
                />
                <p className="text-[9px] text-white/20 ml-2">Supports YouTube, Google Drive, and Vimeo</p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-white/40 ml-2">Description</label>
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                  rows={3}
                  placeholder="Brief project details..."
                />
              </div>

              <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-accent hover:text-white transition-all">
                {editingId ? 'Update Project' : 'Publish Project'}
              </button>
              {editingId && (
                <button 
                  type="button"
                  onClick={resetForm}
                  className="w-full py-3 border border-white/10 text-white/40 font-mono text-xs uppercase tracking-widest rounded-xl hover:border-white/30 hover:text-white transition-all"
                >
                  Cancel Editing
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Project List */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold mb-8">Existing Projects ({projects.length})</h3>
          {projects.map((project) => (
            <div key={project.id} className="glass p-6 rounded-3xl flex items-center gap-6 group">
              <div className="w-32 aspect-video rounded-xl overflow-hidden flex-shrink-0 bg-white/5 flex items-center justify-center border border-white/10">
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter text-center px-2">
                  {project.title}
                </span>
              </div>
              <div className="flex-grow">
                <span className="text-accent text-[10px] font-mono uppercase tracking-widest">{project.category}</span>
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-white/40 text-sm line-clamp-1">{project.description || 'No description'}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleEdit(project)}
                  className="p-4 rounded-2xl bg-white/5 text-white/20 hover:bg-accent/20 hover:text-accent transition-all"
                >
                  <Edit3 size={20} />
                </button>
                <button 
                  onClick={() => handleDelete(project.id)}
                  className="p-4 rounded-2xl bg-white/5 text-white/20 hover:bg-red-500/20 hover:text-red-500 transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
              <p className="text-white/20 font-mono">No projects yet. Add one to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
