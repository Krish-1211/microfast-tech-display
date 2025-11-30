import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Search, ArrowRight } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  keywords: string[];
}

interface SearchResultsProps {
  searchQuery: string;
  isOpen: boolean;
  onClose: () => void;
}

const SearchResults = ({ searchQuery, isOpen, onClose }: SearchResultsProps) => {
  const searchData: SearchResult[] = [
    // Pages
    { title: "Home", description: "MicroFast Tech - Premium technology solutions provider", url: "/", category: "Page", keywords: ["home", "main", "microfast", "tech", "technology", "solutions"] },
    { title: "About Us", description: "Learn about MicroFast Tech's history, mission, and team", url: "/about", category: "Company", keywords: ["about", "history", "mission", "team", "company", "founded", "bangalore"] },
    { title: "Why Choose Us", description: "Discover what sets MicroFast Tech apart from competitors", url: "/why-choose-us", category: "Company", keywords: ["why", "choose", "advantages", "benefits", "quality", "certified", "support", "guarantee"] },
    { title: "Portfolio", description: "View our successful technology implementations and case studies", url: "/portfolio", category: "Projects", keywords: ["portfolio", "projects", "case studies", "implementations", "success", "clients"] },
    { title: "Contact Us", description: "Get in touch with MicroFast Tech for consultations", url: "/contact", category: "Contact", keywords: ["contact", "phone", "email", "address", "consultation", "quote"] },
    
    // Services
    { title: "CCTV Surveillance Systems", description: "Advanced security solutions for comprehensive monitoring", url: "/cctv-surveillance", category: "Service", keywords: ["cctv", "surveillance", "security", "cameras", "monitoring", "24/7", "hd", "4k", "analytics"] },
    { title: "PBX Communication Systems", description: "Professional phone systems with VoIP integration", url: "/pbx-systems", category: "Service", keywords: ["pbx", "communication", "phone", "voip", "hotel", "office", "recording", "analytics"] },
    { title: "Network Cabling", description: "Professional CAT6/CAT7 installation for data transmission", url: "/network-cabling", category: "Service", keywords: ["network", "cabling", "cat6", "cat7", "fiber", "structured", "installation", "data"] },
    { title: "IT Infrastructure", description: "Complete IT solutions and custom PC builds", url: "/it-infrastructure", category: "Service", keywords: ["it", "infrastructure", "custom", "pc", "builds", "server", "diagnostics", "consulting"] },
    
    // Industries
    { title: "Hotels & Hospitality", description: "Technology solutions for hotels and hospitality sector", url: "/industries/hotels", category: "Industry", keywords: ["hotels", "hospitality", "guest", "communication", "security", "property", "management"] },
    { title: "Restaurants", description: "Technology systems for restaurants and food service", url: "/industries/restaurants", category: "Industry", keywords: ["restaurants", "food", "service", "pos", "kitchen", "ordering", "delivery"] },
    { title: "Warehouses", description: "Monitoring and security solutions for warehouses", url: "/industries/warehouses", category: "Industry", keywords: ["warehouses", "logistics", "inventory", "tracking", "security", "monitoring"] },
    { title: "Offices", description: "Corporate office technology and communication systems", url: "/industries/offices", category: "Industry", keywords: ["offices", "corporate", "business", "communication", "network", "security", "workplace"] },
    { title: "Homes", description: "Residential security and smart home solutions", url: "/industries/homes", category: "Industry", keywords: ["homes", "residential", "smart", "home", "security", "automation", "personal"] },
    { title: "Retail Shops", description: "Technology solutions for retail and shopping centers", url: "/industries/retail", category: "Industry", keywords: ["retail", "shops", "shopping", "centers", "pos", "security", "customer", "analytics"] },
  ];

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    const words = query.split(' ').filter(word => word.length > 0);
    
    return searchData
      .map(item => {
        let relevanceScore = 0;
        
        // Check title match (highest weight)
        const titleLower = item.title.toLowerCase();
        if (titleLower.includes(query)) relevanceScore += 10;
        words.forEach(word => {
          if (titleLower.includes(word)) relevanceScore += 5;
        });
        
        // Check description match
        const descLower = item.description.toLowerCase();
        if (descLower.includes(query)) relevanceScore += 3;
        words.forEach(word => {
          if (descLower.includes(word)) relevanceScore += 1;
        });
        
        // Check keywords match
        item.keywords.forEach(keyword => {
          if (keyword.includes(query)) relevanceScore += 7;
          words.forEach(word => {
            if (keyword.includes(word)) relevanceScore += 2;
          });
        });
        
        return { ...item, relevanceScore };
      })
      .filter(item => item.relevanceScore > 0)
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 8); // Show top 8 results
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">
                  Search Results {searchQuery && `for "${searchQuery}"`}
                </CardTitle>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              {filteredResults.length > 0 ? (
                <div className="space-y-3">
                  {filteredResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.url}
                      onClick={onClose}
                      className="block p-3 rounded-lg border border-border hover:bg-accent hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {result.title}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {result.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {result.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No results found for "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try searching for services, industries, or company information</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;