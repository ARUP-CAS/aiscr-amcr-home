<script lang="ts">
	// FAQ sekce - Časté dotazy
	import { MessageCircleQuestion, ChevronDown, MessageSquarePlus } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	let expandedItems = $state(new Set());
	
	const faqItems = [
		{ id: 'pas-q1', questionKey: 'q1', answerKey: 'a1' },
		{ id: 'pas-q2', questionKey: 'q2', answerKey: 'a2' },
		{ id: 'pas-q3', questionKey: 'q3', answerKey: 'a3' },
		{ id: 'pas-q4', questionKey: 'q4', answerKey: 'a4' },
		{ id: 'pas-q5', questionKey: 'q5', answerKey: 'a5' }
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

		<!-- FAQ Accordion Items -->
		<div class="space-y-0">
			{#each faqItems as item}
				<div style="border-bottom: 1px solid #000000;">
					<!-- Collapsible header -->
					<button 
						class="w-full text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
						style="padding: 24px; background-color: rgba(255, 255, 255, 0.9); cursor: pointer;"
						onclick={() => toggleItem(item.id)}
					>
					<h3 class="text-base font-medium text-gray-900 pr-4" style="font-family: 'Roboto', sans-serif;">
						{(m as any)[`amcrPas.faq.${item.questionKey}`]()}
					</h3>
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
		background-image: url('/images/bg-faq.png');
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


