export const clubInfo = {
	name: 'Chinese Tea Club',
	shortName: 'CTC',
	chineseName: '德州大学达拉斯分校中国茶社',
	university: 'The University of Texas at Dallas',
	handle: '@teaclub.utd',
	bio: 'Hi, we are the official Chinese tea club at UTD! Come join us for tea some time 🥰',
	purpose:
		"Our club organizes social events and gatherings in order to foster a deeper understanding of the rich cultural heritage and diverse customs surrounding tea. Our goal is to offer a budget-friendly, welcoming space for students, a 'third place' apart from home and school.",
	weeklyMeetings: {
		day: 'Wednesdays',
		time: '1:00 PM – 3:00 PM',
		quietSession: '1:00 PM – 2:00 PM · Quiet Tea Session & Gongfu (功夫) Tea Ceremony',
		socialHour: '2:00 PM – 3:00 PM · Social Hour (Hang out, drink tea, play games, or study)',
		primaryLocation: 'SU Green & Student Union 2nd Floor Atrium',
		secondaryLocations: ['ECSW Courtyard', 'Eugene McDermott Library', 'Student Union Rooms']
	},
	membership: {
		annualDues: '$10 / academic year',
		eligibility:
			'Open to all UT Dallas students, faculty, and staff regardless of background or prior tea experience.',
		perks: [
			'Unlimited access to weekly Wednesday tea sessions & premium loose-leaf teas',
			'Hands-on training in traditional Gongfu Cha (功夫茶) brewing & tea etiquette',
			'Official voting rights in annual Fall officer elections',
			'Special discounts & priority RSVP for boba collabs, matcha meetups, and festival booths',
			'A cozy, welcoming "third place" on campus to unwind between classes'
		]
	},
	links: {
		linktree: 'https://linktr.ee/ctcutd',
		discord: 'https://discord.gg/UMdGRq6DXf',
		instagram: 'https://www.instagram.com/teaclub.utd/',
		email: 'mailto:ctc.utd@gmail.com',
		emailAddress: 'ctc.utd@gmail.com'
	},
	/**
	 * Paste your published Google Sheet CSV URL here:
	 * (In Google Sheets: File -> Share -> Publish to web -> Select sheet & "Comma-separated values (.csv)" -> Publish)
	 */
	googleSheetCsvUrl: '',
	quickLinks: [
		{
			title: 'Join Our Discord Server',
			subtitle: 'Weekly meeting announcements, room updates, tea talk & study hangouts',
			href: 'https://discord.gg/UMdGRq6DXf',
			badge: 'Primary Community',
			icon: 'discord',
			accent: 'seal-red'
		},
		{
			title: 'Follow @teaclub.utd on Instagram',
			subtitle: 'Event flyers, meeting recaps, story reminders & DM inquiries',
			href: 'https://www.instagram.com/teaclub.utd/',
			badge: '31+ Posts · 233+ Followers',
			icon: 'instagram',
			accent: 'tea-green'
		},
		{
			title: 'Official Linktree Hub (linktr.ee/ctcutd)',
			subtitle: 'All active forms, officer applications, RSVP links & collab flyers in one place',
			href: 'https://linktr.ee/ctcutd',
			badge: 'linktr.ee/ctcutd',
			icon: 'linktree',
			accent: 'gold'
		},
		{
			title: 'Email the Officer Board',
			subtitle: 'Reach out for student org collaborations, cultural showcases, or sponsorship',
			href: 'mailto:ctc.utd@gmail.com',
			badge: 'ctc.utd@gmail.com',
			icon: 'mail',
			accent: 'tea-green'
		}
	],
	advisor: {
		name: 'Professor Chen',
		partnerOrg: 'UT Dallas Center for Asian Studies',
		role: 'Faculty Sponsor & Club Advisor',
		description:
			'Serves as mentor to the club officers and general members, provides authentic tea and Gongfu tea tools, organizes educational workshops executed by the officers, and facilitates relationships with the local community and the Center for Asian Studies.'
	},
	officers: [
		{
			role: 'President',
			chineseTitle: '社长',
			icon: 'crown',
			summary: 'Overall leadership, SOC standing, logistics & inventory management',
			duties: [
				'Ensures smooth operation and continued good standing with the Student Organization Center (SOC).',
				'Attends mandatory SOC meetings/trainings and manages the club’s financial accounts.',
				'Oversees club logistics, room reservations, meeting schedules, and collaborative events.',
				'Serves as the primary point of contact for faculty sponsor Professor Chen.',
				'Hosts and introduces club meetings and manages the club’s inventory of tea and supplies.'
			]
		},
		{
			role: 'Vice President',
			chineseTitle: '副社长',
			icon: 'sparkles',
			summary: 'SOC compliance, inter-org collaborations & live tea demonstrations',
			duties: [
				'Assists the President in ensuring smooth operation and SOC compliance.',
				'Serves as a Tea Guru, demonstrating traditional tea preparation methods during meetings.',
				'Expands the club’s network by contacting other student organizations for collaborations.',
				'Manages communications via email and Instagram DMs and reserves meeting rooms.'
			]
		},
		{
			role: 'Tea Guru',
			chineseTitle: '茶艺导师',
			icon: 'leaf',
			summary: 'Cultural educator & master of traditional Gongfu tea ceremony',
			duties: [
				'Primary educator role dedicated to deep understanding of tea varieties, history, and tea ceremony.',
				'Shares knowledge and hands-on technique in Gongfu Cha (功夫茶) with club members and fellow officers.',
				'Collaborates with the Media Design Director to authentically incorporate Chinese cultural elements.',
				'Inspires passion and curiosity in the heritage and customs of tea.'
			]
		},
		{
			role: 'Financial Director',
			chineseTitle: '财务总监',
			icon: 'coins',
			summary: 'Membership dues ($10/yr), SOC funding, donations & accounting',
			duties: [
				'Handles and facilitates all $10 annual membership fee transactions, donations, and expenses.',
				'Requests funding from the Student Organization Center (SOC) and tracks budgets.',
				'Collaborates on merchandise and teaware cost estimations to ensure a sustainable future for the club.'
			]
		},
		{
			role: 'Secretary',
			chineseTitle: '秘书',
			icon: 'scroll',
			summary: 'Social media announcements, Discord reminders & meeting minutes',
			duties: [
				'Posts digital flyers with captions for upcoming meetings on social media and Instagram stories.',
				'Announces and reminds members of meeting dates and locations in the Discord announcements channel.',
				'Responds to Instagram DMs, takes notes during officer meetings, and maintains meeting minutes.'
			]
		},
		{
			role: 'Media Design Director',
			chineseTitle: '视觉设计总监',
			icon: 'palette',
			summary: 'Visual brand identity, illustrated event posters & creative archive',
			duties: [
				'Leads the Chinese Tea Club’s visual brand and produces digital and physical flyers and posters.',
				'Maintains and organizes a comprehensive archive of all club designs and creative assets.',
				'Works closely with the Tea Guru and President to incorporate authentic Chinese art and culture into every flyer.'
			]
		}
	],
	teaVarieties: [
		{
			name: 'Oolong Tea',
			chinese: '乌龙茶 · Wūlóngchá',
			origin: 'Fujian, Guangdong & Taiwan (Tieguanyin, Da Hong Pao, Dancong)',
			temp: '95°C / 203°F',
			steepTime: '15–25s (Gongfu)',
			character: 'Floral, roasted orchid, honeyed stone fruit & mineral finish',
			description:
				'Semi-oxidized and endlessly expressive, Oolong is the centerpiece of Gongfu Cha (功夫茶). Multiple short infusions in a gaiwan reveal shifting layers of aroma from first steep to tenth.',
			color: '#C47D38'
		},
		{
			name: 'Pu’er & Dark Tea',
			chinese: '普洱茶 · Pǔ’ěrchá',
			origin: 'Yunnan Province (Sheng Raw & Shou Ripe Pressed Cakes)',
			temp: '98–100°C / 210°F',
			steepTime: '10–20s (after rinse)',
			character: 'Earthy petrichor, aged wood, sweet jujube date & velvety body',
			description:
				'Pressed into traditional bingcha (饼茶) discs and aged over years, Pu’er embodies living history along the Ancient Tea Horse Road. Grounding, warming, and ideal for long study afternoons.',
			color: '#7A2E21'
		},
		{
			name: 'Green Tea & Matcha',
			chinese: '绿茶与抹茶 · Lǜchá',
			origin: 'Zhejiang & Jiangsu (Longjing Dragon Well, Biluochun, Whisked Matcha)',
			temp: '80°C / 176°F',
			steepTime: '30–45s or Bamboo Whisk',
			character: 'Toasted chestnut, spring meadow, sweet umami & crisp clarity',
			description:
				'From pan-fired Longjing leaves brewed in tall glass tumblers to freshly whisked bowls at our Matcha Meetups, green tea celebrates vibrant spring harvests and calm focus.',
			color: '#4A6B53'
		},
		{
			name: 'White Tea',
			chinese: '白茶 · Báichá',
			origin: 'Fuding, Fujian (Baihao Yinzhen Silver Needle, Bai Mudan White Peony)',
			temp: '85–90°C / 185°F',
			steepTime: '25–40s',
			character: 'Delicate honeysuckle, fresh hay, melon sweetness & silky texture',
			description:
				'Minimally processed—simply withered in sun and mountain breeze. Known in Chinese proverb as "one year tea, three years medicine, seven years treasure."',
			color: '#B8A88A'
		},
		{
			name: 'Red (Black) Tea',
			chinese: '红茶 · Hóngchá',
			origin: 'Wuyishan & Yunnan (Jin Jun Mei, Dianhong Golden Tips, Keemun)',
			temp: '90–95°C / 198°F',
			steepTime: '15–25s',
			character: 'Cocoa, caramelized malt, sweet yam, wildflower honey & amber liquor',
			description:
				'Known in China as Hongcha ("Red Tea") for its luminous crimson infusion. Naturally sweet without bitterness when steeped with care in a porcelain gaiwan.',
			color: '#9B2322'
		},
		{
			name: 'Jasmine & Artisanal Blends',
			chinese: '花茶 · Huāchá',
			origin: 'Fuzhou, Fujian (Jasmine Dragon Pearls, Osmanthus Oolong, Chrysanthemum)',
			temp: '85–90°C / 188°F',
			steepTime: '20–35s',
			character: 'Night-blooming jasmine, sweet osmanthus blossom & soothing finish',
			description:
				'Green or white tea leaves layered overnight with fresh night-blooming jasmine blossoms, absorbing pure floral perfume without artificial flavoring.',
			color: '#A68942'
		}
	],
	constitution: {
		date: 'August 28, 2025',
		articles: [
			{
				number: 'Article I',
				title: 'Name of the Organization',
				sections: [
					{
						heading: 'Official Name',
						body: 'Chinese Tea Club'
					}
				]
			},
			{
				number: 'Article II',
				title: 'Statement of Purpose',
				sections: [
					{
						heading: 'Mission & Third Place Vision',
						body: 'Our club organizes social events and gatherings in order to foster a deeper understanding of the rich cultural heritage and diverse customs surrounding tea. Our goal is to offer a budget-friendly, welcoming space for students, a ’third place’ apart from home and school.'
					}
				]
			},
			{
				number: 'Article III',
				title: 'Membership',
				sections: [
					{
						heading: 'Section 1.1: Non-Discrimination & Eligibility',
						body: 'Membership shall be open to students of The University of Texas at Dallas regardless of sex (unless specifically exempt by law), race, color, religion, age, national origin, disability, or veteran status.'
					},
					{
						heading: 'Section 1.2: Campus Community',
						body: 'Membership is limited to UT Dallas students, faculty and staff.'
					},
					{
						heading: 'Section 2: Voting Member Criteria',
						body: 'A student is an official member of the club after paying dues of ten dollars ($10) per academic year.'
					},
					{
						heading: 'Section 3: Removal of Members',
						body: 'If a student, having committed and paid dues, fails to uphold the mission of The Tea Club, the club officers will issue this student a warning. At this time, a meeting between the student in question and the club officers can be scheduled to discuss the issue at hand and to offer the student a chance to explain his or her actions. If the student fails to change behavior after two consecutive meetings, she or he will be issued a second warning, and the club officers will take a vote deciding whether or not the student in question is eligible to remain in the club. If the club officers vote unanimously to remove the student, he or she will be asked to leave the club until the next academic year.'
					}
				]
			},
			{
				number: 'Article IV',
				title: 'Officer Roles and Duties',
				sections: [
					{
						heading: 'Section 1: Officer Board Positions',
						body: 'President, Vice President, Financial Director, Secretary, Tea Guru, and Media Design Director. Each officer maintains specific responsibilities spanning SOC compliance, financial stewardship, cultural education, and visual communications.'
					},
					{
						heading: 'Section 2: Event of Officer Recall',
						body: 'An officer may be recalled if they do not fulfill the responsibilities of their position to a satisfactory level. The process includes: (1) Initiation when a concern is raised by other officers; (2) Collective evaluation against role expectations; (3) Officer board vote; and (4) Presidential Decision to approve or deny the recall.'
					},
					{
						heading: 'Section 2.2: Filling Vacancies',
						body: 'Vacant positions will be filled by temporary appointment by the board of officers until a formal election can be held.'
					}
				]
			},
			{
				number: 'Article V',
				title: 'Election Process',
				sections: [
					{
						heading: 'Section 1: Election Timeline',
						body: 'Section 1.1: Elections will be held once a year, at the end of the fall semester. Section 1.2: In the event that an officer leaves in the middle of their term, the board of officers may appoint an active member to the vacant position by a vote of at least 2/3. The appointee will serve until the end of the current term.'
					},
					{
						heading: 'Section 2: Candidate Eligibility',
						body: 'Each candidate must: (1) Be an active member of the club, and (2) Express their intent to run by filling out an application created by the outgoing board of officers.'
					},
					{
						heading: 'Section 3: Selecting New Officers',
						body: '1. Each active member or outgoing officer may cast one vote for each officer position. 2. To be elected, a candidate must receive the plurality of votes cast for the position of interest.'
					}
				]
			},
			{
				number: 'Article VI',
				title: 'Meetings',
				sections: [
					{
						heading: 'Section 1: Regular Meetings',
						body: 'The tea club holds regular afternoon gatherings (including weekly Wednesday afternoon tea sessions on campus and monthly featured tastings).'
					},
					{
						heading: 'Section 2: Officer Meetings',
						body: 'The officers will meet every two weeks or as needed.'
					}
				]
			},
			{
				number: 'Article VII',
				title: 'Organization Funds',
				sections: [
					{
						heading: 'Acquiring Funds',
						body: 'Means of acquiring funds are collection of membership dues, requesting money from the Student Organization Center (SOC), and collecting donations.'
					}
				]
			},
			{
				number: 'Article VIII',
				title: 'Amendments',
				sections: [
					{
						heading: 'Proposing & Approving Amendments',
						body: 'Section 1: Officers or faculty may propose an amendment to the constitution at any time. Section 2: Vote at officer meetings. Section 3: Must have 2/3 votes to pass amendment.'
					}
				]
			},
			{
				number: 'Article IX',
				title: 'Advisor',
				sections: [
					{
						heading: 'Section 1: Selection Process',
						body: 'Officers will choose an advisor unanimously.'
					},
					{
						heading: 'Section 2: Role and Duties of the Advisor',
						body: 'The advisor shall serve as a mentor to the club officers and general members. In addition, the advisor will provide club materials (tea and Gongfu tea tools), organize educational workshops that will be executed by the officers, and facilitate relationships with the local community such as the Center for Asian Studies.'
					}
				]
			},
			{
				number: 'Article X',
				title: 'Dissolution Clause',
				sections: [
					{
						heading: 'Section 1: Disbursement of Funds',
						body: 'All leftover funds will be returned to the organizations from where they came from; excess funds will be donated to the Center for Asian Studies.'
					}
				]
			}
		]
	}
};
