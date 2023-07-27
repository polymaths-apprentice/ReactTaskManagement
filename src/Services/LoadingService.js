const loadingTimeout = 500; // 3 seconds

export async function waitUntilLoaded() {
  return new Promise((resolve) => {
    setTimeout(resolve, loadingTimeout);
  });
}
