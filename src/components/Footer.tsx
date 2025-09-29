import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">chantinyoga</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md mb-4">
              Integrating traditional yoga science with modern medicine for holistic healing. 
              Dr. Juhi Gautam combines 25+ years of yoga practice with medical expertise.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@chantinyoga.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+44 (0) 20 7XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>London, UK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Dr. Juhi</Link></li>
              <li><Link to="/yoga-wellness" className="hover:text-accent transition-colors">Yoga & Wellness</Link></li>
              
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/heart-yoga" className="hover:text-accent transition-colors">Heart Yoga Pranayama</Link></li>
              <li><Link to="/therapeutic-yoga" className="hover:text-accent transition-colors">Therapeutic Yoga Programs</Link></li>
              <li><Link to="/chanting-yoga" className="hover:text-accent transition-colors">Chanting Yoga</Link></li>
              <li><Link to="/kundalini-meditation" className="hover:text-accent transition-colors">Kundalini Meditation</Link></li>
              <li><Link to="/workplace-yoga" className="hover:text-accent transition-colors">Workplace Yoga</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 chantinyoga. All rights reserved. | Dr. Juhi Gautam, MBBS, MRCP, MRCGP</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;