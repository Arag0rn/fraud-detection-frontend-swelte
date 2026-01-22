<script>
    import { base } from '$app/paths';

    let { data, showAnomalies, showOCR, isFraud, currentLang } = $props();


    let anomalies = $derived(data.anomalies.map(a => ({
        ...a,
        info: a.translations[currentLang] || a.translations['en']
    })));
</script>

<div class="container" class:fraudBorder={isFraud}>
    <div class="image-wrapper">
    <img src="{base}/excel-invoice-template.png" alt="Invoice" />

        {#if showAnomalies}
            {#each anomalies as anomaly}
                <div 
                    class="anomaly-box"
                    style:top="{anomaly.coords.top}%"
                    style:left="{anomaly.coords.left}%"
                     style:right="{anomaly.coords.right}%"
                    style:width="{anomaly.coords.width}%"
                    style:height="{anomaly.coords.height}%"
                    role="button"
                    aria-label="Anomaly details"
                >
                    <div class="tooltip">
                        <strong>{anomaly.info.title}</strong>
                        <p>{anomaly.info.desc}</p>
                    </div>
                </div>
            {/each}
        {/if}

        {#if showOCR}
            <div class="ocr-layer">
                <pre>{data.ocrPlaceholder}</pre>
            </div>
        {/if}
    </div>
</div>

<style>
    .container { flex: 1; display: flex; justify-content: center; padding: 20px; transition: all 0.3s; }
    .fraudBorder { background-color: #fff1f0; outline: 5px solid red; background-color: #efb8b5;}
    .image-wrapper { position: relative; display: inline-block; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
    .doc-img { display: block; max-width: 100%; height: auto; }

    .anomaly-box {
        position: absolute;
        border: 2px solid red;
        background: rgba(255, 0, 0, 0.15);
        cursor: help;
    }

    .tooltip {
        visibility: hidden;
        position: absolute;
        bottom: 110%;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 8px;
        border-radius: 4px;
        width: 180px;
        font-size: 12px;
        z-index: 10;
    }

    .anomaly-box:hover .tooltip, .anomaly-box:focus .tooltip {
        visibility: visible;
    }

    .ocr-layer {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(255, 255, 255, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: monospace;
    }

    .anomaly-box {
    position: absolute;
    border: 2px solid #ff4d4f;
    background-color: rgba(255, 77, 79, 0.2);
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none; 
    }

    .anomaly-box:hover,
    .anomaly-box:focus {
        background-color: rgba(255, 77, 79, 0.4);
        border-width: 3px;
        box-shadow: 0 0 10px rgba(255, 77, 79, 0.8);
        z-index: 10;
    }
</style>