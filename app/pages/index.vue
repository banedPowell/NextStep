<script lang="ts" setup>
	import schools from '../../server/data/schools.json';
	import bac from '../../server/data/bac.json';
	import classes from '../../server/data/classes.json';

	const { data: prefill } = await useFetch('/api/prefill');

	const safePrefill = computed(() => {
		const data = prefill.value || {
			school: {
				id: 0,
				name: 'Lycée par défaut',
				city: 'Paris',
				type: 'public',
			},
		};

		return {
			...data,
			school: {
				...data.school,
				type: data.school.type as 'public' | 'private',
			},
		};
	});

	const selectedSchool = ref(safePrefill.value.school);

	const handleSchoolSelection = (selectedSchoolId: number) => {
		const school = schools.find((s) => s.id === selectedSchoolId);
		if (school) {
			selectedSchool.value = {
				...school,
				type: school.type as 'public' | 'private',
			};
		}
	};

	const prefilledOptions = computed(() => [
		prefill.value?.classes?.value || '',
		prefill.value?.bac?.value || '',
	]);

	let categories = [
		{
			name: 'classe',
			options: classes,
		},
		{
			title: 'Type de bac',
			name: 'bac',
			options: bac,
		},
	];

	const isOpenClasseAccordion = ref(false);

	const selectedOptions = ref<string[]>([]);

	const handleClasseSelection = (newSelectedOptions: string[]) => {
		selectedOptions.value = newSelectedOptions;
		isOpenClasseAccordion.value = false;
	};

	const classeDescription = computed(() => {
		if (selectedOptions.value.length === 0) return '';

		const selectedLabels = selectedOptions.value.map((value) => {
			for (const category of categories) {
				const option = category.options.find(
					(opt) => opt.value === value,
				);
				if (option) return option.label;
			}
			return value;
		});

		return selectedLabels.join(', ');
	});

	const specialities = ref([
		{
			name: 'speciality',
			options: [
				{ value: 'hggsp', label: 'HGGSP' },
				{ value: 'hlp', label: 'HLP' },
				{ value: 'llce', label: 'LLCE' },
				{ value: 'lca', label: 'LCA' },
				{ value: 'maths', label: 'Maths' },
				{ value: 'nsi', label: 'NSI' },
				{ value: 'pc', label: 'PC' },
				{ value: 'svt', label: 'SVT' },
				{ value: 'si', label: 'SI' },
				{ value: 'ses', label: 'SES' },
				{ value: 'eps', label: 'EPS' },
				{ value: 'arts', label: 'Arts' },
				{ value: 'be', label: 'BE' },
			],
		},
	]);

	const isOpenSpecialityAccordion = ref(false);

	const selectedSpecialities = ref<string[]>([]);

	const handleSpecialitySelection = (newSelectedOptions: string[]) => {
		console.log(newSelectedOptions);
		console.log(selectedSpecialities.value);
		console.log(isOpenSpecialityAccordion.value);

		selectedSpecialities.value = newSelectedOptions;
		isOpenSpecialityAccordion.value = false;
	};

	const specialityDescription = computed(() => {
		if (selectedSpecialities.value.length === 0) return '';

		const selectedLabels = selectedSpecialities.value.map((value) => {
			for (const category of specialities.value) {
				const option = category.options.find(
					(opt) => opt.value === value,
				);
				if (option) return option.label;
			}
			return value;
		});

		return selectedLabels.join(', ');
	});

	// Vérifier si toutes les informations sont sélectionnées
	const isFormComplete = computed(() => {
		return (
			selectedOptions.value.length > 0 &&
			selectedSpecialities.value.length > 0
		);
	});
</script>

<template>
	<EduPage>
		<SchoolCard
			:schoolId="selectedSchool.id"
			:schoolName="selectedSchool.name"
			:city="selectedSchool.city"
			:schoolType="selectedSchool.type"
			:schools="schools"
			@school-selected="handleSchoolSelection"
		/>

		<EduAccordion
			title="Classe"
			:description="classeDescription"
			:isOpen="isOpenClasseAccordion"
			@update:isOpen="isOpenClasseAccordion = $event"
		>
			<template #content>
				<ClasseSelection
					:categories="categories"
					:prefilledOptions="prefilledOptions"
					@update:selectedOptions="handleClasseSelection"
				/>
			</template>
		</EduAccordion>

		<EduAccordion
			title="Spécialités"
			:isOpen="isOpenSpecialityAccordion"
			:description="specialityDescription"
			@update:isOpen="isOpenSpecialityAccordion = $event"
		>
			<template #content>
				<ClasseSelection
					:categories="specialities"
					:prefilledOptions="['maths']"
					@update:selectedOptions="handleSpecialitySelection"
				/>
			</template>
		</EduAccordion>

		<NuxtLink v-if="isFormComplete" to="/avenir">
			<EduButton
				class="absolute bottom-24 left-1/2 -translate-x-1/2"
				variant="primary"
				label="Confirmer"
			/>
		</NuxtLink>

		<EduButton
			v-else
			class="absolute bottom-24 left-1/2 -translate-x-1/2"
			variant="primary"
			label="Confirmer"
			:disabled="!isFormComplete"
		/>
	</EduPage>
</template>
