<script lang="ts" setup>
	defineOptions({
		inheritAttrs: false,
	});

	const props = defineProps<{
		variant: 'primary' | 'secondary' | 'icon';
		disabled?: boolean;
		label?: string;
		icon?: string;
	}>();
</script>

<template>
	<button
		v-if="variant === 'primary'"
		class="flex h-fit w-fit items-center justify-center gap-2 rounded-full border px-6 py-4 font-sans text-[16px] font-semibold transition-colors"
		:class="[
			disabled
				? 'cursor-not-allowed border border-gray-200 bg-white text-gray-400'
				: 'cursor-pointer bg-gray-900 text-white hover:bg-gray-800',
			$attrs.class,
		]"
	>
		<UIcon v-if="icon" :name="icon" />
		<slot v-if="!label"> Bouton </slot>
		<p v-else>{{ label }}</p>
	</button>

	<button
		v-if="variant === 'secondary'"
		class="flex h-fit w-fit items-center justify-center gap-2 rounded-full border border-transparent bg-white px-4 py-2 font-sans text-sm font-normal transition-colors"
		:class="[
			disabled
				? 'cursor-not-allowed border-gray-200 text-gray-400'
				: 'cursor-pointer text-gray-900 hover:border-gray-200',
		]"
	>
		<slot v-if="!label"> Bouton </slot>
		<p v-else>{{ label }}</p>
	</button>

	<button
		v-if="variant === 'icon'"
		class="flex size-4 h-fit w-fit items-center justify-center transition-colors"
		:class="[
			disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer',
			$attrs.class,
		]"
		v-bind="$attrs"
	>
		<slot v-if="!icon">
			<UIcon name="lucide-plus" />
		</slot>
		<UIcon v-else :name="icon" />
	</button>
</template>
