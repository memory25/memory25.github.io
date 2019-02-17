export default function scrollToView(e: React.MouseEvent) {
  e.preventDefault();
  const targetElY = (document.querySelector(
    (e.currentTarget as HTMLAnchorElement).hash
  ) as HTMLDivElement).offsetTop;
  const distance: number = targetElY - window.pageYOffset;
  const gapFreq: number = 15;
  const gapDistance: number = distance / gapFreq;

  let count: number = 0;

  let timer = requestAnimationFrame(function fn() {
    let posY = window.pageYOffset;
    if (count !== gapFreq) {
      count += 1;
      posY += gapDistance;
      window.scrollTo(0, count === gapFreq ? targetElY : posY);
      timer = requestAnimationFrame(fn);
    }
  });
}
