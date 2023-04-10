import minimist from "minimist";
import os from "os";

const ci = ['1', 'true'].includes(process.env.CI ?? '');

