import PropTypes from 'prop-types';

export function SocialLink({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="mr-4 transition duration-300 ease-in-out hover:text-blue-500 text-xl">
      {icon}
    </a>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
