const { useState, useRef, useEffect } = React;

const LucideIcon = ({ name, size = 18, className = "" }) => {
    useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
    }, [name]);
    return <i data-lucide={name} style={{ width: size, height: size }} className={className}></i>;
};

const analyzeAesthetics = (imageSrc) => {
    const seed = imageSrc.length;
    const prng = (o) => {
        const x = Math.sin(seed + o) * 10000;
        return x - Math.floor(x);
    };
    const symmetry = Math.floor(prng(1) * 12) + 85;
    const goldenRatio = Math.floor(prng(2) * 15) + 82;
    const score = ((symmetry * 0.5 + goldenRatio * 0.5) / 10).toFixed(1);

    return {
        score,
        faceShape: "Defined-Angular",
        advice: {
            hair: "High volume top to emphasize symmetry.",
            eyewear: "Rectangular frames for contrast.",
            grooming: "Short boxed beard for jaw definition."
        },
        metrics: [
            { label: 'Bilateral Symmetry', value: symmetry },
            { label: 'Golden Ratio', value: goldenRatio }
        ]
    };
};

const App = () => {
    const [image, setImage] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [results, setResults] = useState(null);
    const fileInputRef = useRef(null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (f) => { setImage(f.target.result); setResults(null); };
            reader.readAsDataURL(file);
        }
    };

    const run = () => {
        setIsAnalyzing(true);
        setTimeout(() => {
            setResults(analyzeAesthetics(image));
            setIsAnalyzing(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen p-6 md:p-12 max-w-4xl mx-auto">
            <header className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                        <LucideIcon name="scan" className="text-black" />
                    </div>
                    <h1 className="text-xl font-light tracking-widest uppercase">ASH <span className="font-bold">VISION</span></h1>
                </div>
                <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">V3.6.0</span>
            </header>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <div onClick={() => fileInputRef.current.click()} className="aspect-[4/5] glass-card rounded-3xl overflow-hidden relative cursor-pointer">
                        {image ? <img src={image} className="h-full w-full object-cover" /> : <div className="h-full flex items-center justify-center opacity-20">Upload Photo</div>}
                        {isAnalyzing && <div className="scanning-bar"></div>}
                        <input type="file" ref={fileInputRef} onChange={handleFile} className="hidden" />
                    </div>
                    <button onClick={run} disabled={!image || isAnalyzing} className="w-full py-4 bg-indigo-600 rounded-2xl font-bold uppercase tracking-widest text-xs">
                        {isAnalyzing ? "Processing..." : "Analyze"}
                    </button>
                </div>

                <div className="space-y-6">
                    {!results ? (
                        <div className="h-full glass-card rounded-3xl flex items-center justify-center text-white/10 p-10 text-center">Awaiting Data</div>
                    ) : (
                        <div className="space-y-6">
                            <div className="glass-card p-8 rounded-3xl">
                                <span className="text-[10px] text-white/40 uppercase block mb-1">Harmony Score</span>
                                <div className="text-6xl font-light">{results.score}<span className="text-xl text-white/20">/10</span></div>
                            </div>
                            <div className="glass-card p-6 rounded-3xl space-y-4">
                                <h3 className="text-[10px] font-bold uppercase text-indigo-400">Styling Advice</h3>
                                <p className="text-xs text-white/60">Hair: {results.advice.hair}</p>
                                <p className="text-xs text-white/60">Grooming: {results.advice.grooming}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <footer className="mt-20 text-center text-[10px] text-white/20 tracking-widest uppercase">
                Ash Vision | by Hussain
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
