<script>
	let { t, showAnomalies, showOCR, isFraud, onToggleAnomalies, onToggleOCR, onToggleFraud } = $props();
</script>

<aside class="sidebar">
	<div class="card">
		<h3>{t.details || 'Details'}</h3>
		
		<div class="button-group">
			<button 
				class:active={showAnomalies} 
				onclick={onToggleAnomalies}
			>
				{showAnomalies ? t.hideAnomalies : t.showAnomalies}
			</button>

			<button 
				class:active={showOCR} 
				onclick={onToggleOCR}
			>
				{t.showOCR}
			</button>
		</div>

		<hr />

		<div class="action-section">
			<button 
				class="fraud-btn" 
				class:isFraudActive={isFraud}
				onclick={() => onToggleFraud(!isFraud)}
			>
				{t.markAsFraud}
			</button>
		</div>
	</div>
</aside>

<style>

	.sidebar { width: 300px; padding: 1rem; background: #f9f9f9; border-left: 1px solid #ddd; }
	.card { display: flex; flex-direction: column; gap: 1rem; }
	.button-group { display: flex; flex-direction: column; gap: 0.5rem; }
	button { padding: 0.8rem; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; }
	.active { background-color: #007bff; color: white; border-color: #0056b3; }
	.fraud-btn { background: white; border: 2px solid #ff4d4f; color: #ff4d4f; font-weight: bold; }
	.fraud-btn.isFraudActive { background: #ff4d4f; color: white; }
</style>