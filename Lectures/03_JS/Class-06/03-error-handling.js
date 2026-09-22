function bootNavigation(mapLoaded) {
  try {
    console.log(`is navigation loaded: ${mapLoaded}`);
    if (!mapLoaded) {
      throw new Error("Map was not loaded in this function");
    }
    return "NAV_OK";
  } catch (error) {
    console.log(error);
    console.log(`navigation failed: ${error.message}`);
  } finally {
    console.log("Navigation sequence Completed");
  }
}

const status1 = bootNavigation(false);
console.log(`Result: ${status1}`);
