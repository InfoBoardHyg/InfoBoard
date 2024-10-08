import busSetup from "./busSection/busJS.js";

busSetup();
onInterval(10, async () => await busSetup());

import timeSetup from "./timeSection/timeJS.js";

timeSetup();
onInterval(1, timeSetup())

import weatherSetup from "./weatherSection/weather.js";

weatherSetup();
onInterval(10, async () => await weatherSetup());

import {
    bindActivities,
    onInterval
} from "./skemaSection/controller.js";



bindActivities();
onInterval(10, async () => await bindActivities());

import { tavleSetup } from "./TavleSection/tavle.js";

tavleSetup();
onInterval(10, async () => await tavleSetup());

import { kantinefetch } from "./kantineSection/kantine.js";

kantinefetch();
onInterval(10, async () => await kantinefetch());


