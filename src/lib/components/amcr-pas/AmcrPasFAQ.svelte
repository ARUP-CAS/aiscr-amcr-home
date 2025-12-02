<script lang="ts">
	// FAQ sekce - Časté dotazy
	import { MessageCircleQuestion, ChevronDown, MessageSquarePlus } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	let expandedItems = $state(new Set());
	
	// FAQ otázky pro veřejnost
	const faqPublic = [
		{ id: 'pas-q1', questionKey: 'q1', answerKey: 'a1' },
		{ id: 'pas-q2', questionKey: 'q2', answerKey: 'a2' },
		{ id: 'pas-q3', questionKey: 'q3', answerKey: 'a3' },
		{ id: 'pas-q4', questionKey: 'q4', answerKey: 'a4' },
		{ id: 'pas-q5', questionKey: 'q5', answerKey: 'a5' },
		{ id: 'pas-q6', questionKey: 'q6', answerKey: 'a6' },
		{ id: 'pas-q7', questionKey: 'q7', answerKey: 'a7' },
		{ id: 'pas-q8', questionKey: 'q8', answerKey: 'a8' },
		{ id: 'pas-q9', questionKey: 'q9', answerKey: 'a9' },
		{ id: 'pas-q10', questionKey: 'q10', answerKey: 'a10' },
		{ id: 'pas-q11', questionKey: 'q11', answerKey: 'a11' }
	];
	
	// FAQ otázky pro odborné organizace
	const faqProfessional = [
		{ id: 'pas-q12', questionKey: 'q12', answerKey: 'a12' },
		{ id: 'pas-q13', questionKey: 'q13', answerKey: 'a13' },
		{ id: 'pas-q14', questionKey: 'q14', answerKey: 'a14' },
		{ id: 'pas-q15', questionKey: 'q15', answerKey: 'a15' },
		{ id: 'pas-q16', questionKey: 'q16', answerKey: 'a16' },
		{ id: 'pas-q17', questionKey: 'q17', answerKey: 'a17' },
		{ id: 'pas-q18', questionKey: 'q18', answerKey: 'a18' },
		{ id: 'pas-q19', questionKey: 'q19', answerKey: 'a19' },
		{ id: 'pas-q20', questionKey: 'q20', answerKey: 'a20' },
		{ id: 'pas-q21', questionKey: 'q21', answerKey: 'a21' }
	];
	
	function toggleItem(itemId: string) {
		if (expandedItems.has(itemId)) {
			expandedItems.delete(itemId);
		} else {
			expandedItems.add(itemId);
		}
		expandedItems = new Set(expandedItems);
	}
</script>

<section id="caste-dotazy" class="faq-section" style="font-family: 'Roboto', sans-serif; background-color: #FFFFFF; padding-top: 128px; padding-bottom: 80px;">
	<div class="w-full px-4 sm:px-6 lg:px-8" style="max-width: 1312px; margin: 0 auto;">
		
		<!-- Header with icon -->
		<div class="mb-12">
			<div class="flex items-center mb-4">
				<MessageCircleQuestion size={63} color="#721C17" class="mr-3" />
				<h2 class="font-bold" style="font-family: 'Roboto Slab', serif; color: var(--color-primary); font-size: 40px;">
					{m['amcrPas.faq.title']()}
				</h2>
			</div>
		</div>

		<!-- FAQ Sekce pro veřejnost -->
		<div class="mb-8">
			<h3 class="font-bold mb-6" style="font-family: 'Roboto', sans-serif; color: var(--color-primary); font-size: 28px;">
				{m['amcrPas.faq.sectionTitle']()}
			</h3>
			<div class="space-y-0">
				{#each faqPublic as item}
					<div style="border-bottom: 1px solid #000000;">
						<!-- Collapsible header -->
						<button 
							class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
							style="padding: 24px; background-color: rgba(255, 255, 255, 0.9); cursor: pointer;"
							onclick={() => toggleItem(item.id)}
						>
						<h4 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
							{(m as any)[`amcrPas.faq.${item.questionKey}`]()}
						</h4>
							<ChevronDown 
								size="20" 
								color="#666" 
								class="transform transition-transform flex-shrink-0 {expandedItems.has(item.id) ? 'rotate-180' : ''}"
							/>
						</button>
						
						<!-- Collapsible content -->
						{#if expandedItems.has(item.id)}
						<div style="padding: 0 24px 24px 24px; background-color: rgba(255, 255, 255, 0.9);">
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
								{@html (m as any)[`amcrPas.faq.${item.answerKey}`]()}
							</p>
						</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
		
		<!-- FAQ Sekce pro odborné organizace -->
		<div class="mb-8">
			<h3 class="font-bold mb-6" style="font-family: 'Roboto', sans-serif; color: var(--color-primary); font-size: 28px;">
				{m['amcrPas.faq.sectionProfessional']()}
			</h3>
			<div class="space-y-0">
				{#each faqProfessional as item}
					<div style="border-bottom: 1px solid #000000;">
						<!-- Collapsible header -->
						<button 
							class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
							style="padding: 24px; background-color: rgba(255, 255, 255, 0.9); cursor: pointer;"
							onclick={() => toggleItem(item.id)}
						>
						<h4 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
							{(m as any)[`amcrPas.faq.${item.questionKey}`]()}
						</h4>
							<ChevronDown 
								size="20" 
								color="#666" 
								class="transform transition-transform flex-shrink-0 {expandedItems.has(item.id) ? 'rotate-180' : ''}"
							/>
						</button>
						
						<!-- Collapsible content -->
						{#if expandedItems.has(item.id)}
						<div style="padding: 0 24px 24px 24px; background-color: rgba(255, 255, 255, 0.9);">
							<p class="text-gray-700 leading-relaxed" style="font-family: 'Roboto', sans-serif;">
								{@html (m as any)[`amcrPas.faq.${item.answerKey}`]()}
							</p>
						</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<!-- Contact section -->
		<div class="mt-16">
			<div>
				<MessageSquarePlus size="48" color="#721C17" style="margin-bottom: 16px;" />
				<h3 class="font-bold" style="font-family: 'Roboto', sans-serif; color: var(--color-primary); font-size: 32px; margin-bottom: 16px;">
					{m['amcrPas.faq.moreQuestionsTitle']()}
				</h3>
				<p class="font-bold" style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px; margin-bottom: 16px;">
					{@html m['amcrPas.faq.moreQuestionsSubtitle']()}
				</p>
				<div style="font-family: 'Roboto', sans-serif; color: #000000; font-size: 18px;">
					<p style="margin-bottom: 8px;">{m['amcrPas.faq.contactText']()}</p>
					<p>
						{@html m['amcrPas.faq.contactInfo']()}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.faq-section {
		background-image: url('/images/bg-faq.webp');
		background-size: 1312px auto;
		background-position: center top;
		background-repeat: no-repeat;
	}
	
	/* Schovat pozadí na mobilech */
	@media (max-width: 768px) {
		.faq-section {
			background-image: none;
		}
	}
</style>


