<script lang="ts" setup>
	const props = defineProps<{
		schoolId: number;
		schoolName: string;
		city: string;
		schoolType: 'public' | 'private';
		schools: {
			id: number;
			name: string;
			city: string;
			type: string;
		}[];
	}>();

	const isOModifySchoolOpen = ref(false);

	const emit = defineEmits<{
		'school-selected': [value: number];
	}>();

	const handleSchoolSelection = (selectedSchoolId: number) => {
		emit('school-selected', selectedSchoolId);
		isOModifySchoolOpen.value = false;
	};
</script>

<template>
	<div class="flex flex-col gap-6">
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
						{{
							schoolType === 'public'
								? 'Lycée public'
								: 'Lycée privé'
						}}
					</li>
				</ul>
			</div>

			<EduButton
				variant="secondary"
				class="w-fit"
				:label="isOModifySchoolOpen ? 'Fermer' : 'Modifier'"
				@click="isOModifySchoolOpen = !isOModifySchoolOpen"
			/>
		</div>

		<ul
			v-show="isOModifySchoolOpen"
			class="flex flex-col gap-2 rounded-2xl bg-white p-5"
		>
			<template v-for="(school, index) in schools" :key="school.id">
				<SchoolItem
					:school="school"
					:isSelected="school.id === schoolId"
					@school-selected="handleSchoolSelection(school.id)"
				/>
				<USeparator v-if="index < schools.length - 1" class="w-full" />
			</template>
		</ul>
	</div>
</template>
