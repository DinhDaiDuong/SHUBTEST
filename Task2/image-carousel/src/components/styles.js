const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: '80px',
  },

  header: {
    marginBottom: '55px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    textAlign: 'center',
    width: '66%',
  },

  iconContainer: {
    position: 'relative',
    width: '56px',
    height: '56px',
  },

  heading: {
    marginTop: '14px',
    marginBottom: '24px',
    textAlign: 'center',
  },

  description: {
    textAlign: 'center',
  },

  carouselContainer: {
    width: '100%',
    padding: '0 16px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },

  carouselWrapper: {
    width: '60%', 
    position: 'relative',
  },

  carouselSlide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '147.5px',
    marginRight: '16px',
    flexShrink: 0,
  },

  slideImage: {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '16px',
  },

  navigationButton: {
    width: '48px',
    height: '48px',
    background: 'rgb(255, 255, 255)',
    borderRadius: '50%',
    boxShadow: 'rgba(21, 25, 28, 0.25) 0px 16px 16px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftButton: {
    left: '-24px', 
  },

  rightButton: {
    right: '-24px', 
  },
};

export default styles;
