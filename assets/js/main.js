import busSetup from "./busSection/busJS.js";

onInterval(10, async () => await busSetup());

import timeSetup from "./timeSection/timeJS.js";

timeSetup();

import weatherSetup from "./weatherSection/weather.js";

weatherSetup();

import { bindActivities,
    onInterval
 } from "./skemaSection/controller.js";

onInterval(10, async () => await bindActivities());