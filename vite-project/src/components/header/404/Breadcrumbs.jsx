import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();

    // Mapping paths to labels
    const pathNameMap = {
        '': 'Home',
        'contact': 'Contact',
        // Add more mappings here if needed
    };

    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink = currentLink + `/${crumb}`;
            const label = pathNameMap[crumb] || crumb;

            return (
                <div className="crumb inline-block mr-2 " key={crumb}>
                    <Link to={currentLink} className="text-grey-600 text-md hover:text-grey-800">
                        {label}
                    </Link>
                    <span className="mx-2">/</span>
                </div>
            );
        });

    // Adding Home link manuall

    return (
        <div className="breadcrumbs text-sm my-4">
            {crumbs}
        </div>
    );
}

export default Breadcrumbs;
