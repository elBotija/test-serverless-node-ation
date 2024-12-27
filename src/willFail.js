export const alwaysFails = () => 'wrong';

export const noTestCoverage = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'production';
  }
  return 'development';
};
