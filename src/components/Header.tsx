import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SearchResults from './SearchResults';
import logo from '@/assets/microfast-logo-cropped.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const location = useLocation();

  const navigation: Array<{
    name: string;
    href: string;
    dropdown?: Array<{ name: string; href: string }>;
  }> = [
      { name: 'Home', href: '/' },
      {
        name: 'Services', href: '/services', dropdown: [
          { name: 'CCTV Surveillance', href: '/cctv-surveillance' },
          { name: 'PBX Systems', href: '/pbx-systems' },
          { name: 'Network Cabling', href: '/network-cabling' },
          { name: 'IT Infrastructure', href: '/it-infrastructure' },
        ]
      },
      {
        name: 'Industries', href: '/industries', dropdown: [
          { name: 'Gas Stations & Convenience', href: '/industries/gas-stations' },
          { name: 'Restaurants', href: '/industries/restaurants' },
          { name: 'Hotels & Hospitality', href: '/industries/hotels' },
          { name: 'Offices', href: '/industries/offices' },
        ]
      },
      { name: 'Contact', href: '/contact' },
    ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim() && value.length > 2) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="MicroFast Tech Logo" className="h-28 w-28 object-contain rounded-full" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-[#00b8a9]">MicroFast Tech</span>
              <span className="text-xs font-bold text-foreground tracking-[0.15em]">IT SOLUTIONS & SURVEILLANCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-base font-medium transition-colors hover:text-primary text-muted-foreground">
                      <span>{item.name}</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                    <div className={`absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg py-2 z-50 transition-all duration-200 ${openDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-base font-medium transition-colors hover:text-primary ${isActive(item.href)
                      ? 'text-primary'
                      : 'text-muted-foreground'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative ml-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 h-11 w-56 text-base"
              />
            </form>
          </nav>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="lg"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown && Array.isArray(item.dropdown) ? (
                    <div>
                      <div className="px-3 py-2 text-sm font-medium text-muted-foreground">{item.name}</div>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block pl-6 pr-3 py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive(item.href)
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground'
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="pl-9 h-9 w-full"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Results Overlay */}
      <SearchResults
        searchQuery={searchQuery}
        isOpen={showSearchResults}
        onClose={() => setShowSearchResults(false)}
      />
    </header>
  );
};

export default Header;