import { signal } from '@preact/signals-react';

const isTemp = signal(true);
const isHumidity = signal(false);
const isWindSpeed = signal(false);

export { isTemp, isHumidity, isWindSpeed };
