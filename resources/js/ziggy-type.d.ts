import { useRoute as routeFn } from 'ziggy-js';

declare global {
    var useRoute: typeof routeFn;
}
