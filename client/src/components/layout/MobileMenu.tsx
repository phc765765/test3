import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: Array<{ name: string; path: string }>;
  currentPath: string;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, navItems, currentPath, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <div 
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                currentPath === item.path 
                  ? 'text-primary bg-primary-50' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={onClose}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
