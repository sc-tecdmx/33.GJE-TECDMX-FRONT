import { useHead } from '@vueuse/head';
import { unref, computed } from 'vue';

let siteTitle = 'Tribunal Electoral de la Ciudad de México';
let separator = '|';

export const usePageTitle = (pageTitle) =>
    useHead(
        computed(() => ({
            title: `${unref(pageTitle)} ${separator} ${siteTitle}`,
        }))
    );

export const useMeta = (data) => {
    return useHead({ ...data, title: `${data.title} | Sistema Integral` });
};
