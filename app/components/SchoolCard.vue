<script lang="ts" setup>
	const props = defineProps<{
		schoolName: string;
		city: string;
		schoolType: string;
	}>();
</script>

<template>
	<div
		class="flex w-full flex-col gap-6 rounded-2xl bg-[radial-gradient(132.54%_111.87%_at_100%_0%,rgba(255,187,225,0.5)_0%,rgba(255,187,225,0)_100%),linear-gradient(279deg,#B176FF_0%,#FF7342_50%)] p-5 text-white md:flex-row md:justify-between"
	>
		<div class="items-starts flex flex-col justify-center gap-2">
			<h2 class="text-xl font-bold text-wrap">
				{{ schoolName || `Nom de l'école` }}
			</h2>

			<ul class="flex gap-2">
				<li class="flex items-center gap-1">
					<UIcon name="lucide-map-pin" />
					{{ city || 'Ville' }}
				</li>

				<li class="flex items-center gap-1">
					<UIcon name="lucide-building" />
					{{ schoolType || `Lycée public` }}
				</li>
			</ul>
		</div>

		<EduButton variant="secondary" class="w-fit" label="Modifier" />
	</div>
</template>
