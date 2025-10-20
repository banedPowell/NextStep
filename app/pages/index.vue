<script lang="ts" setup>
	import schools from '../../server/data/schools.json';

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
	</EduPage>
</template>
