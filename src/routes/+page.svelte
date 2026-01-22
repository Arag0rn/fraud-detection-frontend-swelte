
<script>
    import Sidebar from '../lib/Sidebar.svelte';

    import DocumentViewer from '../lib/DocumentViewer.svelte'; 
    
    import { de } from '../locales/de';
    import { en } from '../locales/en';
    import { documentData } from '../data/mockData';

    let lang = $state('de');
    let showAnomalies = $state(true);
    let showOCR = $state(false);
    let isFraud = $state(false);

    let t = $derived(lang === 'de' ? de.ui : en.ui);
</script>

<header style="padding: 20px; background: #0056b3; color: white; display: flex; gap: 20px; align-items: center;">
    <strong>Language:</strong>
    <button onclick={() => lang = 'de'} style:font-weight={lang === 'de' ? 'bold' : 'normal'}>DE</button>
    <button onclick={() => lang = 'en'} style:font-weight={lang === 'en' ? 'bold' : 'normal'}>EN</button>
</header>

<main style="display: flex; flex: 1;">
    <DocumentViewer 
        data={documentData} 
        {showAnomalies} 
        {showOCR} 
        {isFraud} 
        currentLang={lang} 
    />
    
    <Sidebar 
        {t} 
        {showAnomalies} 
        {showOCR} 
        {isFraud}
        onToggleAnomalies={() => showAnomalies = !showAnomalies}
        onToggleOCR={() => showOCR = !showOCR}
        onToggleFraud={(v) => isFraud = v}
    />
</main>