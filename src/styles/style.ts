const appStyle = {
  container: {
    width: 460,
    height: 660,
    border: '1px solid #00acc1',
    px: 4,
    pt: 4,
  },
  calculatorContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 3,
    height: '100%',
  },
  infoContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  infoHeaderContainer: {},
  infoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    alignItems: 'center',
    width: '100%',
  },
  inputsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonsContainer: {
    display: 'flex',
    gap: 2,
    justifyContent: 'flex-end',
    width: '100%',
  },
  resultContainer: {
    width: '100%',
    height: 100,
    border: '1px solid #94a3b8',
    display: 'flex',
    mt: 1,
    WebkitBoxShadow: '0px 0px 13px 4px rgba(250,250,250,0.87)',
    MozBoxShadow: '0px 0px 13px 4px rgba(250,250,250,0.87)',
    boxShadow: '0px 0px 13px 4px rgba(250,250,250,0.87)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFieldAdornment: {
    '.MuiTypography-root': {
      color: 'secondary.main',
      fontWeight: 'bold',
    },
  },
  select: {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'primary.main',
      borderWidth: 2,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'primary.main',
    },
  },
  tooltip: {
    color: 'secondary.main',
    fontSize: '2rem',
    cursor: 'pointer',
  },
  footerContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerInfoContainer: {
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    width: '100%',
  },
};

export default appStyle;
