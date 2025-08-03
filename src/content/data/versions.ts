import type { McVersion } from '@mc/metadata';

import type { Loose } from './loose';

type VersionInfo = {
	name?: string;
	page?: string;
	date?: string;
	article?: URL['href'];
	wiki?: URL['href'];
	resourcepackVersion?: string;
	datapackVersion?: string;
};

export const versionsInfo = new Map<Loose<McVersion>, VersionInfo>([
	[
		'25w31a',
		{
			date: '2025-07-29',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w31a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w31a',
			resourcepackVersion: '65.0',
			datapackVersion: '82.0'
		}
	],
	[
		'1.21.8',
		{
			date: '2025-07-17',
			article: 'https://www.minecraft.net/it-it/article/minecraft-java-edition-1-21-8',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.8',
			resourcepackVersion: '64',
			datapackVersion: '81'
		}
	],
	[
		'1.21.8-rc1',
		{
			date: '2025-07-15',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-8-release-candidate-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.8_Release_Candidate_1',
			resourcepackVersion: '64',
			datapackVersion: '81'
		}
	],
	[
		'1.21.7',
		{
			date: '2025-06-30',
			article: 'https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-7',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.7',
			resourcepackVersion: '64',
			datapackVersion: '81'
		}
	],
	[
		'1.21.7-rc2',
		{
			date: '2025-06-26',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-7-release-candidate-2',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.7_Release_Candidate_2',
			resourcepackVersion: '64',
			datapackVersion: '81'
		}
	],
	[
		'1.21.7-rc1',
		{
			date: '2025-06-25',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-7-release-candidate-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.7_Release_Candidate_1',
			resourcepackVersion: '64',
			datapackVersion: '81'
		}
	],
	[
		'1.21.6',
		{
			name: 'Chase the Skies',
			page: 'chasetheskies',
			date: '2025-06-17',
			article: 'https://www.minecraft.net/it-it/article/minecraft-java-edition-1-21-6',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.6',
			resourcepackVersion: '64',
			datapackVersion: '81'
		}
	],
	[
		'1.21.6-rc1',
		{
			date: '2025-06-12',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-6-release-candidate-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.6_Release_Candidate_1',
			resourcepackVersion: '64',
			datapackVersion: '81'
		}
	],
	[
		'1.21.6-pre4',
		{
			date: '2025-06-10',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-6-pre-release-4',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.6_Pre-Release_4',
			resourcepackVersion: '63',
			datapackVersion: '80'
		}
	],
	[
		'1.21.6-pre3',
		{
			date: '2025-06-04',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-6-pre-release-3',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.6_Pre-Release_3',
			resourcepackVersion: '63',
			datapackVersion: '80'
		}
	],
	[
		'1.21.6-pre2',
		{
			date: '2025-06-02',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-6-pre-release-2',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.6_Pre-Release_2',
			resourcepackVersion: '63',
			datapackVersion: '79'
		}
	],
	[
		'1.21.6-pre1',
		{
			date: '2025-05-28',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-6-pre-release-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.6_Pre-Release_1',
			resourcepackVersion: '63',
			datapackVersion: '79'
		}
	],
	[
		'25w21a',
		{
			page: '25w21a',
			date: '2025-05-20',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w21a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w21a',
			resourcepackVersion: '62',
			datapackVersion: '78'
		}
	],
	[
		'25w20a',
		{
			page: '25w20a',
			date: '2025-05-13',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w20a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w20a',
			resourcepackVersion: '61',
			datapackVersion: '77'
		}
	],
	[
		'25w19a',
		{
			date: '2025-05-06',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w19a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w19a',
			resourcepackVersion: '60',
			datapackVersion: '76'
		}
	],
	[
		'25w18a',
		{
			date: '2025-04-29',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w18a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w18a',
			resourcepackVersion: '59',
			datapackVersion: '75'
		}
	],
	[
		'25w17a',
		{
			date: '2025-04-22',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w17a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w17a',
			resourcepackVersion: '58',
			datapackVersion: '74'
		}
	],
	[
		'25w16a',
		{
			date: '2025-04-15',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w16a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w16a',
			resourcepackVersion: '57',
			datapackVersion: '73'
		}
	],
	[
		'25w15a',
		{
			date: '2025-04-08',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w15a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w15a',
			resourcepackVersion: '56',
			datapackVersion: '72'
		}
	],
	[
		'25w14craftmine',
		{
			page: 'craftmine',
			date: '2025-04-01',
			article: 'https://www.minecraft.net/en-us/article/the-craftmine-update',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w14craftmine',
			resourcepackVersion: '55',
			datapackVersion: '71'
		}
	],
	[
		'1.21.5',
		{
			name: 'Spring to Life',
			page: 'springtolife',
			date: '2025-03-25',
			article: 'https://www.minecraft.net/it-it/article/minecraft-java-edition-1-21-5',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.5',
			resourcepackVersion: '55',
			datapackVersion: '71'
		}
	],
	[
		'1.21.5-rc2',
		{
			date: '2025-03-24',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-5-release-candidate-2',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.5_Release_Candidate_2',
			resourcepackVersion: '55',
			datapackVersion: '71'
		}
	],
	[
		'1.21.5-rc1',
		{
			date: '2025-03-20',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-5-release-candidate-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.5_Release_Candidate_1',
			resourcepackVersion: '55',
			datapackVersion: '71'
		}
	],
	[
		'1.21.5-pre3',
		{
			date: '2025-03-18',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-5-pre-release-3',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.5_Pre-Release_3',
			resourcepackVersion: '55',
			datapackVersion: '71'
		}
	],
	[
		'1.21.5-pre2',
		{
			date: '2025-03-12',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-5-pre-release-2',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.5_Pre-release_2',
			resourcepackVersion: '55',
			datapackVersion: '71'
		}
	],
	[
		'1.21.5-pre1',
		{
			date: '2025-03-11',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-5-pre-release-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.5_Release_Candidate_1',
			resourcepackVersion: '55',
			datapackVersion: '70'
		}
	],
	[
		'25w10a',
		{
			date: '2025-03-05',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w10a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w10a',
			resourcepackVersion: '54',
			datapackVersion: '70'
		}
	],
	[
		'25w09b',
		{
			date: '2025-02-27',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w09b',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w09b',
			resourcepackVersion: '53',
			datapackVersion: '69'
		}
	],
	[
		'25w09a',
		{
			date: '2025-02-26',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w09a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w09a',
			resourcepackVersion: '53',
			datapackVersion: '69'
		}
	],
	[
		'25w08a',
		{
			date: '2025-02-19',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w08a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w08a',
			resourcepackVersion: '53',
			datapackVersion: '68'
		}
	],
	[
		'25w07a',
		{
			date: '2025-02-13',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w07a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w07a',
			resourcepackVersion: '52',
			datapackVersion: '67'
		}
	],
	[
		'25w06a',
		{
			date: '2025-02-05',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w06a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w06a',
			resourcepackVersion: '51',
			datapackVersion: '66'
		}
	],
	[
		'25w05a',
		{
			date: '2025-01-29',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w05a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w05a',
			resourcepackVersion: '50',
			datapackVersion: '65'
		}
	],
	[
		'25w04a',
		{
			date: '2025-01-22',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w04a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w04a',
			resourcepackVersion: '49',
			datapackVersion: '64'
		}
	],
	[
		'25w03a',
		{
			date: '2025-01-15',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w03a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w03a',
			resourcepackVersion: '48',
			datapackVersion: '63'
		}
	],
	[
		'25w02a',
		{
			date: '2025-01-08',
			article: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w02a',
			wiki: 'https://minecraft.wiki/w/Java_Edition_25w02a',
			resourcepackVersion: '47',
			datapackVersion: '62'
		}
	],
	[
		'1.21.4',
		{
			name: 'The Garden Awakens',
			date: '2024-12-03',
			article: 'https://www.minecraft.net/en-us/article/the-garden-awakens-is-here',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.4',
			resourcepackVersion: '46',
			datapackVersion: '61'
		}
	],
	[
		'1.21.4-rc3',
		{
			date: '2024-11-29',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-4-release-candidate-3',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.4_Release_Candidate_3'
		}
	],
	[
		'1.21.4-rc2',
		{
			date: '2024-11-29',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-4-release-candidate-2',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.4_Release_Candidate_2'
		}
	],
	[
		'1.21.4-rc1',
		{
			date: '2024-11-28',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-4-release-candidate-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.4_Release_Candidate_1'
		}
	],
	[
		'1.21.4-pre3',
		{
			date: '2024-11-26',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-4-pre-release-3',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.4_Pre-Release_3'
		}
	],
	[
		'1.21.4-pre2',
		{
			date: '2024-11-25',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-4-pre-release-2',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.4_Pre-Release_2'
		}
	],
	[
		'1.21.4-pre1',
		{
			date: '2024-11-20',
			article: 'https://www.minecraft.net/en-us/article/minecraft-1-21-4-pre-release-1',
			wiki: 'https://minecraft.wiki/w/Java_Edition_1.21.4_Pre-Release_1'
		}
	],
	[
		'1.21.3',
		{
			name: 'Bundles of Bravery'
		}
	],
	[
		'1.21.2',
		{
			name: 'Bundles of Bravery'
		}
	],
	[
		'1.21.1',
		{
			name: 'Tricky Trials'
		}
	],
	[
		'1.21',
		{
			name: 'Tricky Trials'
		}
	],
	[
		'1.20.6',
		{
			name: 'Armored Paws'
		}
	],
	[
		'1.20.5',
		{
			name: 'Armored Paws'
		}
	],
	[
		'1.20.4',
		{
			name: 'Bats and Pots'
		}
	],
	[
		'1.20.3',
		{
			name: 'Bats and Pots'
		}
	],
	[
		'1.20.2',
		{
			name: 'Trails & Tales'
		}
	],
	[
		'1.20.1',
		{
			name: 'Trails & Tales'
		}
	],
	[
		'1.20',
		{
			name: 'Trails & Tales'
		}
	],
	[
		'1.19.4',
		{
			name: 'The Wild Update'
		}
	],
	[
		'1.19.3',
		{
			name: 'The Wild Update'
		}
	],
	[
		'1.19.2',
		{
			name: 'The Wild Update'
		}
	],
	[
		'1.19.1',
		{
			name: 'The Wild Update'
		}
	],
	[
		'1.19',
		{
			name: 'The Wild Update'
		}
	],
	[
		'1.18.2',
		{
			name: 'Caves & Cliffs: Part II'
		}
	],
	[
		'1.18.1',
		{
			name: 'Caves & Cliffs: Part II'
		}
	],
	[
		'1.18',
		{
			name: 'Caves & Cliffs: Part II'
		}
	],
	[
		'1.17.1',
		{
			name: 'Caves & Cliffs: Part I'
		}
	],
	[
		'1.17',
		{
			name: 'Caves & Cliffs: Part I'
		}
	],
	[
		'1.16.5',
		{
			name: 'Nether Update'
		}
	],
	[
		'1.16.4',
		{
			name: 'Nether Update'
		}
	],
	[
		'1.16.3',
		{
			name: 'Nether Update'
		}
	],
	[
		'1.16.2',
		{
			name: 'Nether Update'
		}
	],
	[
		'1.16.1',
		{
			name: 'Nether Update'
		}
	],
	[
		'1.16',
		{
			name: 'Nether Update'
		}
	],
	[
		'1.15.2',
		{
			name: 'Buzzy Bees'
		}
	],
	[
		'1.15.1',
		{
			name: 'Buzzy Bees'
		}
	],
	[
		'1.15',
		{
			name: 'Buzzy Bees'
		}
	],
	[
		'1.14.4',
		{
			name: 'Village & Pillage'
		}
	],
	[
		'1.14.3',
		{
			name: 'Village & Pillage'
		}
	],
	[
		'1.14.2',
		{
			name: 'Village & Pillage'
		}
	],
	[
		'1.14.1',
		{
			name: 'Village & Pillage'
		}
	],
	[
		'1.14',
		{
			name: 'Village & Pillage'
		}
	],
	[
		'1.13.2',
		{
			name: 'Update Aquatic'
		}
	],
	[
		'1.13.1',
		{
			name: 'Update Aquatic'
		}
	],
	[
		'1.13',
		{
			name: 'Update Aquatic'
		}
	],
	[
		'1.12.2',
		{
			name: 'World of Color Update'
		}
	],
	[
		'1.12.1',
		{
			name: 'World of Color Update'
		}
	],
	[
		'1.12',
		{
			name: 'World of Color Update'
		}
	],
	[
		'1.11.2',
		{
			name: 'Exploration Update'
		}
	],
	[
		'1.11.1',
		{
			name: 'Exploration Update'
		}
	],
	[
		'1.11',
		{
			name: 'Exploration Update'
		}
	],
	[
		'1.10.2',
		{
			name: 'Frostburn Update'
		}
	],
	[
		'1.10.1',
		{
			name: 'Frostburn Update'
		}
	],
	[
		'1.10',
		{
			name: 'Frostburn Update'
		}
	],
	[
		'1.9.4',
		{
			name: 'Combat Update'
		}
	],
	[
		'1.9.3',
		{
			name: 'Combat Update'
		}
	],
	[
		'1.9.2',
		{
			name: 'Combat Update'
		}
	],
	[
		'1.9.1',
		{
			name: 'Combat Update'
		}
	],
	[
		'1.9',
		{
			name: 'Combat Update'
		}
	],
	[
		'1.8.9',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.8',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.7',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.6',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.5',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.4',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.3',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.2',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8.1',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.8',
		{
			name: 'Bountiful Update'
		}
	],
	[
		'1.7.10',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.9',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.8',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.7',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.6',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.5',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.4',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.3',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.7.2',
		{
			name: 'The Update that Changed the World'
		}
	],
	[
		'1.6.4',
		{
			name: 'Horse Update'
		}
	],
	[
		'1.6.3',
		{
			name: 'Horse Update'
		}
	],
	[
		'1.6.2',
		{
			name: 'Horse Update'
		}
	],
	[
		'1.6.1',
		{
			name: 'Horse Update'
		}
	],
	[
		'1.5.2',
		{
			name: 'Redstone Update'
		}
	],
	[
		'1.5.1',
		{
			name: 'Redstone Update'
		}
	],
	[
		'1.5',
		{
			name: 'Redstone Update'
		}
	],
	[
		'1.4.7',
		{
			name: 'Pretty Scare Update'
		}
	],
	[
		'1.4.6',
		{
			name: 'Pretty Scare Update'
		}
	],
	[
		'1.4.5',
		{
			name: 'Pretty Scare Update'
		}
	],
	[
		'1.4.4',
		{
			name: 'Pretty Scare Update'
		}
	],
	[
		'1.4.2',
		{
			name: 'Pretty Scare Update'
		}
	],
	[
		'1.3.2',
		{
			name: '1.3 releases'
		}
	],
	[
		'1.3.1',
		{
			name: '1.3 releases'
		}
	],
	[
		'1.2.5',
		{
			name: '1.2 releases'
		}
	],
	[
		'1.2.4',
		{
			name: '1.2 releases'
		}
	],
	[
		'1.2.3',
		{
			name: '1.2 releases'
		}
	],
	[
		'1.2.2',
		{
			name: '1.2 releases'
		}
	],
	[
		'1.2.1',
		{
			name: '1.2 releases'
		}
	],
	[
		'1.1',
		{
			name: 'Adventure Update: Part II'
		}
	],
	[
		'1.0',
		{
			name: 'Adventure Update: Part II'
		}
	],
	[
		'b1.8.1',
		{
			name: 'Adventure Update: Part I'
		}
	],
	[
		'b1.8',
		{
			name: 'Adventure Update: Part I'
		}
	],
	[
		'a1.2.6',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.5',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.4_01',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.4',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.3_04',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.3_02',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.3_01',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.3',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.2a',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.1_01',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.1',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.0_02',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.0_01',
		{
			name: 'Halloween Update'
		}
	],
	[
		'a1.2.0',
		{
			name: 'Halloween Update',
			date: '2010-10-30'
		}
	],
	[
		'rd-161348',
		{
			wiki: 'https://minecraft.wiki/w/Java_Edition_pre-Classic_rd-161348'
		}
	],
	[
		'rd-160052',
		{
			wiki: 'https://minecraft.wiki/w/Java_Edition_pre-Classic_rd-160052'
		}
	],
	[
		'rd-20090515',
		{
			wiki: 'https://minecraft.wiki/w/Java_Edition_pre-Classic_rd-20090515'
		}
	],
	[
		'rd-132328',
		{
			wiki: 'https://minecraft.wiki/w/Java_Edition_pre-Classic_rd-132328'
		}
	],
	[
		'rd-132211',
		{
			wiki: 'https://minecraft.wiki/w/Java_Edition_pre-Classic_rd-132211'
		}
	],
	[
		'rd-131655',
		{
			wiki: 'https://minecraft.wiki/w/Java_Edition_pre-Classic_rd-131655'
		}
	],
	[
		'rd-131648',
		{
			wiki: 'https://minecraft.wiki/w/Java_Edition_pre-Classic_rd-131648'
		}
	]
]);