export default ({ children }) => {
  document.querySelector(':root')?.setAttribute('lang', 'ru'); // for lighthouse accessibility metrics

  return (
    <div
      style={{
        backgroundColor: 'rgba(51, 51, 51, 0.07)',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      }}
      data-theme="pc"
    >
      {children}
    </div>
  );
};
