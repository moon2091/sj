import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const [path, id] = href.split('#');

        if (path === '/' || path === '') {
            navigate('/');
            setTimeout(() => {
                if (id) {
                    const targetElement = document.getElementById(id);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else {
            navigate(path);
        }
    };
    
    const footerSections = [
        {
            title: 'Quick Links',
            links: [
                { name: 'Home', href: '/#' },
                { name: 'Services', href: '/#services' },
                { name: 'Portfolio', href: '/#portfolio' },
                { name: 'About', href: '/#about' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'Contact Us', href: '/contact' },
            ],
        },
    ];

    const contactInfo = [
        {
            icon: <MapPin size={20} />,
            label: 'Address',
            value: '152, 9 Green Rd, Dhaka, Bangladesh, 1205'
        },
        {
            icon: <Phone size={20} />,
            label: 'Phone',
            value: '01717-376309',
            href: 'tel:01717376309'
        },
        {
            icon: <Mail size={20} />,
            label: 'Email',
            value: 'info.studiojunction@gmail.com',
            href: 'mailto:info.studiojunction@gmail.com'
        },
    ];

    const socialLinks = [
        { 
            icon: <Facebook size={20} />, 
            name: 'Facebook',
            url: 'https://www.facebook.com/studiojunctionbd/'
        },
        { 
            icon: <Instagram size={20} />, 
            name: 'Instagram',
            url: 'https://www.instagram.com/studiojunctionbd/'
        },
        { 
            icon: <Youtube size={20} />, 
            name: 'YouTube',
            url: 'https://www.youtube.com/@studiojunction'
        },
    ];

    return (
        <footer className="bg-[#0C0D0D] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <Link to="/" className="group">
                            <img 
                                src="/images/30dc83c589e6d133c19f5213321ff965.png" 
                                alt="Studio Junction BD Logo" 
                                className="h-[100px] w-auto mb-4 transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-gray-400">
                            Studio Junction is a full-service communication and marketing agency offering tailored solutions for branding, marketing, promotion, visibility, and technology. We specialize in elevating brand presence and ensuring long-term success across various platforms, from digital marketing to event management, documentary film production, SEO, and more.
                        </p>
                    </div>

                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <p className="font-semibold text-white mb-6">{section.title}</p>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <a 
                                          href={link.href} 
                                          onClick={(e) => {
                                              if (link.href === '/contact') {
                                                  e.preventDefault();
                                                  navigate('/contact');
                                              } else if (link.href.includes('#')) {
                                                  handleNavClick(e);
                                              }
                                          }} 
                                          className="text-gray-400 hover:text-accent-purple transition-colors duration-300">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <p className="font-semibold text-white mb-6">Contact Info</p>
                        <ul className="space-y-4">
                            {contactInfo.map((info) => (
                                <li key={info.label} className="flex items-start gap-3 text-gray-400">
                                    <span className="text-accent-purple mt-1">{info.icon}</span>
                                    <div className="flex-1">
                                        {info.href ? (
                                            <a href={info.href} className="hover:text-accent-purple transition-colors duration-300">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="text-sm">{info.value}</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <p className="font-semibold text-white mt-8 mb-4">Follow Us</p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name} 
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-accent-purple transition-colors duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Studio Junction. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;