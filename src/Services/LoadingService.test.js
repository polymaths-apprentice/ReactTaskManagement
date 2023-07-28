import { waitUntilLoaded } from "./LoadingService";

test("waits until loaded", async () => {
  const startTime = new Date();
  await waitUntilLoaded();
  const endTime = new Date();
  const elapsedTime = endTime - startTime;
  expect(elapsedTime).toBeGreaterThanOrEqual(500);
});
