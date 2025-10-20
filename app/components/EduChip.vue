<script lang="ts" setup>
	const props = defineProps<{
		label?: string;
		value?: string;
		modelValue?: string | null;
		name: string;
	}>();

	const emit = defineEmits<{
		'update:modelValue': [value: string | null];
	}>();

	const isSelected = computed(() => {
		return props.modelValue && props.modelValue === props.value;
	});

	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit('update:modelValue', target.checked ? props.value || null : null);
	};
</script>

<template>
	<label
		class="flex w-fit cursor-pointer items-center justify-center rounded-full border bg-gray-100 px-4 py-2 text-[16px] font-normal text-gray-900 select-none hover:border-gray-200"
		:class="[isSelected ? 'border-gray-900' : 'border-transparent']"
	>
		<input
			type="radio"
			:id="value"
			:name="name"
			:value="value"
			@change="handleChange"
			class="hidden"
		/>
		<p>{{ label || 'Option' }}</p>
	</label>
</template>
