import css from './Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className={css.SectionStyled}>
      <h1 className={css.Title}>{title}</h1>
      {children}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};