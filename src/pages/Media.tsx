import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Volume2, Download, Share2, Heart } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Media = () => {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [audioProgress, setAudioProgress] = useState<{ [key: string]: number }>({});
  const [audioDuration, setAudioDuration] = useState<{ [key: string]: number }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  const audioTracks = [
    {
      id: "anxiety-depression",
      title: "Anxiety & Depression Relief",
      description: "Therapeutic audio for managing anxiety and depression through yoga",
      duration: "Unknown",
      category: "Therapeutic",
      audioUrl: "/audio/anxietydepression.mp3"
    },
    {
      id: "back-pain",
      title: "Back Pain Relief",
      description: "Guided practices for alleviating back pain and improving posture",
      duration: "Unknown",
      category: "Therapeutic",
      audioUrl: "/audio/backache.mp3"
    },
    {
      id: "cancer-support",
      title: "Cancer Support",
      description: "Supportive yoga and meditation practices for cancer patients",
      duration: "Unknown",
      category: "Therapeutic",
      audioUrl: "/audio/cancer.mp3"
    },
    {
      id: "chanting-session",
      title: "Chanting Session",
      description: "Traditional yoga chanting for spiritual awakening and healing",
      duration: "Unknown",
      category: "Spiritual",
      audioUrl: "/audio/chanting.mp3"
    },
    {
      id: "headache-relief",
      title: "Headache Relief",
      description: "Gentle practices to relieve headaches and tension",
      duration: "Unknown",
      category: "Therapeutic",
      audioUrl: "/audio/headache.mp3"
    },
    {
      id: "hypertension",
      title: "Hypertension Management",
      description: "Breathing and relaxation techniques for blood pressure control",
      duration: "Unknown",
      category: "Therapeutic",
      audioUrl: "/audio/hypertension.mp3"
    },
    {
      id: "meditation-guide",
      title: "Meditation Guide",
      description: "Deep meditation practice for mindfulness and inner peace",
      duration: "Unknown",
      category: "Meditation",
      audioUrl: "/audio/meditation.mp3"
    },
    {
      id: "obesity-management",
      title: "Obesity Management",
      description: "Yoga practices to support healthy weight management",
      duration: "Unknown",
      category: "Therapeutic",
      audioUrl: "/audio/obesity.mp3"
    },
    {
      id: "sleep-therapy",
      title: "Sleep Therapy",
      description: "Relaxing practices for better sleep quality and insomnia relief",
      duration: "Unknown",
      category: "Relaxation",
      audioUrl: "/audio/sleep.mp3"
    },
    {
      id: "stress-relief",
      title: "Stress Relief",
      description: "Comprehensive stress management through yoga and breathing",
      duration: "Unknown",
      category: "Therapeutic",
      audioUrl: "/audio/stress.mp3"
    }
  ];

  const videoTutorials = [
    {
      id: "yoga-basics-1",
      title: "What is yoga?",
      description: "Fundamental introduction to the practice and philosophy of yoga",
      youtubeId: "iHn5ofB0H1g",
      youtubeUrl: "https://www.youtube.com/watch?v=iHn5ofB0H1g",
      embedUrl: "https://www.youtube.com/embed/iHn5ofB0H1g",
      category: "Educational",
      thumbnail: "https://img.youtube.com/vi/iHn5ofB0H1g/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/iHn5ofB0H1g/maxresdefault.jpg"
    },
    {
      id: "yoga-evolution-2",
      title: "Why did yoga evolve and how long has it existed?",
      description: "Explore the rich history and evolution of yoga practice",
      youtubeId: "fCWDGbT2lsA",
      youtubeUrl: "https://www.youtube.com/watch?v=fCWDGbT2lsA",
      embedUrl: "https://www.youtube.com/embed/fCWDGbT2lsA",
      category: "Educational",
      thumbnail: "https://img.youtube.com/vi/fCWDGbT2lsA/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/fCWDGbT2lsA/maxresdefault.jpg"
    },
    {
      id: "yoga-science-3",
      title: "Is yoga scientific?",
      description: "Understanding the scientific basis of yoga practice",
      youtubeId: "04Shp7-BeLU",
      youtubeUrl: "https://www.youtube.com/watch?v=04Shp7-BeLU",
      embedUrl: "https://www.youtube.com/embed/04Shp7-BeLU",
      category: "Educational",
      thumbnail: "https://img.youtube.com/vi/04Shp7-BeLU/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/04Shp7-BeLU/maxresdefault.jpg"
    },
    {
      id: "yoga-medicine-4",
      title: "Can we compare the yoga science with medicine?",
      description: "Comparing yoga practice with modern medical approaches",
      youtubeId: "YBipMh5VtXo",
      youtubeUrl: "https://www.youtube.com/watch?v=YBipMh5VtXo",
      embedUrl: "https://www.youtube.com/embed/YBipMh5VtXo",
      category: "Medical",
      thumbnail: "https://img.youtube.com/vi/YBipMh5VtXo/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/YBipMh5VtXo/maxresdefault.jpg"
    },
    {
      id: "yoga-survival-5",
      title: "How did yoga survive for so long?",
      description: "The resilience and continuity of yoga through the ages",
      youtubeId: "lTk-nUQJTZ0",
      youtubeUrl: "https://www.youtube.com/watch?v=lTk-nUQJTZ0",
      embedUrl: "https://www.youtube.com/embed/lTk-nUQJTZ0",
      category: "Educational",
      thumbnail: "https://img.youtube.com/vi/lTk-nUQJTZ0/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/lTk-nUQJTZ0/maxresdefault.jpg"
    },
    {
      id: "yoga-prescription-6",
      title: "In the present time how relevant is it to prescribe yoga",
      description: "The relevance of prescribing yoga in modern healthcare",
      youtubeId: "deDBwzMOKJ8",
      youtubeUrl: "https://www.youtube.com/watch?v=deDBwzMOKJ8",
      embedUrl: "https://www.youtube.com/embed/deDBwzMOKJ8",
      category: "Medical",
      thumbnail: "https://img.youtube.com/vi/deDBwzMOKJ8/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/deDBwzMOKJ8/maxresdefault.jpg"
    },
    {
      id: "yoga-disorders-7",
      title: "What are the disorders that yoga has been efficatious?",
      description: "Disorders and conditions where yoga has proven effective",
      youtubeId: "swtLu10giG4",
      youtubeUrl: "https://www.youtube.com/watch?v=swtLu10giG4",
      embedUrl: "https://www.youtube.com/embed/swtLu10giG4",
      category: "Therapeutic",
      thumbnail: "https://img.youtube.com/vi/swtLu10giG4/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/swtLu10giG4/maxresdefault.jpg"
    },
    {
      id: "medical-practitioners-8",
      title: "Are medical practitioners prescribing yoga?",
      description: "How medical professionals are integrating yoga into treatment",
      youtubeId: "PV67YDF55Ac",
      youtubeUrl: "https://www.youtube.com/watch?v=PV67YDF55Ac",
      embedUrl: "https://www.youtube.com/embed/PV67YDF55Ac",
      category: "Medical",
      thumbnail: "https://img.youtube.com/vi/PV67YDF55Ac/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/PV67YDF55Ac/maxresdefault.jpg"
    },
    {
      id: "yoga-side-effects-9",
      title: "What are the side effects and long-term consequences of yoga?",
      description: "Understanding potential side effects and long-term impacts",
      youtubeId: "sw2sePsNlRY",
      youtubeUrl: "https://www.youtube.com/watch?v=sw2sePsNlRY",
      embedUrl: "https://www.youtube.com/embed/sw2sePsNlRY",
      category: "Educational",
      thumbnail: "https://img.youtube.com/vi/sw2sePsNlRY/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/sw2sePsNlRY/maxresdefault.jpg"
    },
    {
      id: "yoga-lifestyle-10",
      title: "Is it a way of life?",
      description: "Exploring yoga as a comprehensive lifestyle approach",
      youtubeId: "uRipdmEWk2I",
      youtubeUrl: "https://www.youtube.com/watch?v=uRipdmEWk2I",
      embedUrl: "https://www.youtube.com/embed/uRipdmEWk2I",
      category: "Lifestyle",
      thumbnail: "https://img.youtube.com/vi/uRipdmEWk2I/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/uRipdmEWk2I/maxresdefault.jpg"
    },
    {
      id: "personal-interest-11",
      title: "When did you get interested in yoga?",
      description: "Personal journey and interest in yoga practice",
      youtubeId: "YG_6TqbO_xo",
      youtubeUrl: "https://www.youtube.com/watch?v=YG_6TqbO_xo",
      embedUrl: "https://www.youtube.com/embed/YG_6TqbO_xo",
      category: "Personal",
      thumbnail: "https://img.youtube.com/vi/YG_6TqbO_xo/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/YG_6TqbO_xo/maxresdefault.jpg"
    },
    {
      id: "starting-yoga-12",
      title: "How and when should one start practicing yoga?",
      description: "Guidelines for beginning your yoga practice journey",
      youtubeId: "etKSKhMTXRU",
      youtubeUrl: "https://www.youtube.com/watch?v=etKSKhMTXRU",
      embedUrl: "https://www.youtube.com/embed/etKSKhMTXRU",
      category: "Practical",
      thumbnail: "https://img.youtube.com/vi/etKSKhMTXRU/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/etKSKhMTXRU/maxresdefault.jpg"
    },
    {
      id: "yoga-diet-13",
      title: "Yoga diet",
      description: "Dietary guidelines and nutrition for yoga practitioners",
      youtubeId: "vQW6tBbQD2k",
      youtubeUrl: "https://www.youtube.com/watch?v=vQW6tBbQD2k",
      embedUrl: "https://www.youtube.com/embed/vQW6tBbQD2k",
      category: "Lifestyle",
      thumbnail: "https://img.youtube.com/vi/vQW6tBbQD2k/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/vQW6tBbQD2k/maxresdefault.jpg"
    },
    {
      id: "patient-benefits-14",
      title: "How are your patients benefiting?",
      description: "Real patient experiences and benefits from yoga therapy",
      youtubeId: "ntVVRGp6q6g",
      youtubeUrl: "https://www.youtube.com/watch?v=ntVVRGp6q6g",
      embedUrl: "https://www.youtube.com/embed/ntVVRGp6q6g",
      category: "Therapeutic",
      thumbnail: "https://img.youtube.com/vi/ntVVRGp6q6g/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/ntVVRGp6q6g/maxresdefault.jpg"
    },
    {
      id: "yoga-message-15",
      title: "What is your message?",
      description: "Key message and philosophy from Dr. Juhi Gautam",
      youtubeId: "pUIv6x66lxQ",
      youtubeUrl: "https://www.youtube.com/watch?v=pUIv6x66lxQ",
      embedUrl: "https://www.youtube.com/embed/pUIv6x66lxQ",
      category: "Personal",
      thumbnail: "https://img.youtube.com/vi/pUIv6x66lxQ/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/pUIv6x66lxQ/maxresdefault.jpg"
    },
    {
      id: "pranayama-16",
      title: "What is pranayama?",
      description: "Understanding the breathing techniques of yoga",
      youtubeId: "HFJviQejbVM",
      youtubeUrl: "https://www.youtube.com/watch?v=HFJviQejbVM",
      embedUrl: "https://www.youtube.com/embed/HFJviQejbVM",
      category: "Advanced",
      thumbnail: "https://img.youtube.com/vi/HFJviQejbVM/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/HFJviQejbVM/maxresdefault.jpg"
    },
    {
      id: "chanting-yoga-17",
      title: "What is chanting yoga and how does it work?",
      description: "Exploring the practice and benefits of yoga chanting",
      youtubeId: "v_7geYkja0E",
      youtubeUrl: "https://www.youtube.com/watch?v=v_7geYkja0E",
      embedUrl: "https://www.youtube.com/embed/v_7geYkja0E",
      category: "Advanced",
      thumbnail: "https://img.youtube.com/vi/v_7geYkja0E/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/v_7geYkja0E/maxresdefault.jpg"
    },
    {
      id: "spirituality-medicine-18",
      title: "How does spirituality help in medicine?",
      description: "The role of spirituality in healing and medical practice",
      youtubeId: "96kOsckMw44",
      youtubeUrl: "https://www.youtube.com/watch?v=96kOsckMw44",
      embedUrl: "https://www.youtube.com/embed/96kOsckMw44",
      category: "Medical",
      thumbnail: "https://img.youtube.com/vi/96kOsckMw44/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/96kOsckMw44/maxresdefault.jpg"
    },
    {
      id: "kundalini-yoga-19",
      title: "Kundalini yoga",
      description: "Introduction to the powerful practice of Kundalini yoga",
      youtubeId: "i0LBgVQM0kk",
      youtubeUrl: "https://www.youtube.com/watch?v=i0LBgVQM0kk",
      embedUrl: "https://www.youtube.com/embed/i0LBgVQM0kk",
      category: "Advanced",
      thumbnail: "https://img.youtube.com/vi/i0LBgVQM0kk/hqdefault.jpg",
      thumbnailHD: "https://img.youtube.com/vi/i0LBgVQM0kk/maxresdefault.jpg"
    }
  ];

  const imageGallery = [
    {
      id: "pose-1",
      title: "Warrior Pose Demonstration",
      category: "Poses",
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "meditation-1",
      title: "Meditation Garden",
      category: "Meditation",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "anatomy-1",
      title: "Yoga Anatomy Chart",
      category: "Educational",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "nature-1",
      title: "Yoga in Nature",
      category: "Inspiration",
      url: "https://images.unsplash.com/photo-1593810451176-8b62bc18075e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "sunset-1",
      title: "Sunset Meditation",
      category: "Inspiration",
      url: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: "group-1",
      title: "Group Yoga Session",
      category: "Community",
      url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];

  const toggleAudio = (trackId: string) => {
    const audio = audioRefs.current[trackId];
    if (!audio) return;

    if (currentAudio === trackId) {
      audio.pause();
      setCurrentAudio(null);
    } else {
      // Pause any currently playing audio
      if (currentAudio && audioRefs.current[currentAudio]) {
        audioRefs.current[currentAudio].pause();
      }
      
      audio.play();
      setCurrentAudio(trackId);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const downloadAudio = (audioUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = `${title}.mp3`;
    link.click();
  };

  useEffect(() => {
    audioTracks.forEach((track) => {
      if (!audioRefs.current[track.id]) {
        const audio = new Audio(track.audioUrl);
        
        audio.addEventListener('loadedmetadata', () => {
          setAudioDuration(prev => ({
            ...prev,
            [track.id]: audio.duration
          }));
        });

        audio.addEventListener('timeupdate', () => {
          setAudioProgress(prev => ({
            ...prev,
            [track.id]: audio.currentTime
          }));
        });

        audio.addEventListener('ended', () => {
          setCurrentAudio(null);
          setAudioProgress(prev => ({
            ...prev,
            [track.id]: 0
          }));
        });

        audioRefs.current[track.id] = audio;
      }
    });

    return () => {
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.remove();
      });
    };
  }, []);

  const toggleVideo = (videoId: string) => {
    if (currentVideo === videoId) {
      setCurrentVideo(null);
    } else {
      setCurrentVideo(videoId);
    }
  };

  const shareVideo = (video: any) => {
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.description,
        url: video.youtubeUrl,
      });
    } else {
      navigator.clipboard.writeText(video.youtubeUrl);
      // You could add a toast notification here
    }
  };

  const openVideoInNewTab = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Media & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of audio meditations, video tutorials, and 
            educational images to support your yoga and wellness journey.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-accent" />
            <span>Curated by Dr. Juhi Gautam</span>
          </div>
        </div>
      </section>

      {/* Audio Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Audio Library
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Listen to guided meditations, pranayama sessions, and therapeutic audio content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audioTracks.map((track) => {
              const progress = audioProgress[track.id] || 0;
              const duration = audioDuration[track.id] || 0;
              const progressPercentage = duration > 0 ? (progress / duration) * 100 : 0;
              
              return (
                <Card key={track.id} className="shadow-medium border-0 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{track.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{track.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="bg-secondary px-2 py-1 rounded">{track.category}</span>
                          <span>{duration > 0 ? formatTime(duration) : 'Loading...'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Dr. Juhi Gautam</span>
                        <span className="text-sm text-muted-foreground">
                          {progress > 0 ? `${formatTime(progress)} / ${formatTime(duration)}` : formatTime(duration)}
                        </span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2 mb-4 cursor-pointer"
                           onClick={(e) => {
                             const audio = audioRefs.current[track.id];
                             if (audio && duration > 0) {
                               const rect = e.currentTarget.getBoundingClientRect();
                               const clickX = e.clientX - rect.left;
                               const newTime = (clickX / rect.width) * duration;
                               audio.currentTime = newTime;
                             }
                           }}>
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all" 
                          style={{width: `${progressPercentage}%`}}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={() => toggleAudio(track.id)}
                            className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground hover:scale-105 transition-transform"
                          >
                            {currentAudio === track.id ? (
                              <Pause className="h-5 w-5" />
                            ) : (
                              <Play className="h-5 w-5 ml-0.5" />
                            )}
                          </button>
                          <Volume2 className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => downloadAudio(track.audioUrl, track.title)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Video Tutorials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch comprehensive video demonstrations and educational content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTutorials.map((video) => (
              <Card key={video.id} className="shadow-medium border-0 bg-gradient-card overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  {currentVideo === video.id ? (
                    <div className="relative w-full h-48">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-48"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <>
                      <img 
                        src={video.thumbnailHD}
                        alt={video.title}
                        className="w-full h-48 object-cover transition-transform hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = video.thumbnail;
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <button 
                          onClick={() => toggleVideo(video.id)}
                          className="h-16 w-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 hover:bg-primary/30 transition-all duration-300 shadow-lg"
                        >
                          <Play className="h-8 w-8 ml-1" />
                        </button>
                      </div>
                      <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                        <span>YouTube</span>
                      </div>
                    </>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-secondary px-2 py-1 rounded text-xs text-muted-foreground">
                      {video.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      {currentVideo === video.id ? (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setCurrentVideo(null)}
                          title="Close video"
                        >
                          <Pause className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openVideoInNewTab(video.youtubeUrl)}
                          title="Open in YouTube"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => shareVideo(video)}
                        title="Share video"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Image Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of yoga poses, educational charts, and inspiring visuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageGallery.map((image) => (
              <Card key={image.id} className="shadow-medium border-0 bg-gradient-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-primary hover:bg-white/90">
                      View Full Size
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">{image.title}</h3>
                  <span className="bg-secondary px-2 py-1 rounded text-xs text-muted-foreground">
                    {image.category}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-primary shadow-soft">
              Load More Images
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Personalized Content?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a consultation with Dr. Juhi Gautam for customized yoga and wellness programs
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Book Personal Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Media;