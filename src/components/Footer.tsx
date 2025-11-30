import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/microfast-logo-cropped.png';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="MicroFast Tech Logo" className="h-10 w-10 object-contain rounded-full" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-[#00b8a9]">MicroFast Tech</span>
                <span className="text-[0.6rem] font-bold text-foreground tracking-[0.1em]">IT SOLUTIONS & SURVEILLANCE</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional technology solutions for secure communication and connectivity.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cctv-surveillance" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  CCTV Surveillance
                </Link>
              </li>
              <li>
                <Link to="/pbx-systems" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  PBX Systems
                </Link>
              </li>
              <li>
                <Link to="/network-cabling" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Network Cabling
                </Link>
              </li>
              <li>
                <Link to="/it-infrastructure" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  IT Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Industries</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/industries/gas-stations" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gas Stations
                </Link>
              </li>
              <li>
                <Link to="/industries/restaurants" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/industries/hotels" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hotels & Hospitality
                </Link>
              </li>
              <li>
                <Link to="/industries/offices" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>229 551 7613</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>sales@microfasttech.com</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>2905 Chastain Meadows Pkwy<br />STE 1108, Marietta, GA-30066</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 MicroFast Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;