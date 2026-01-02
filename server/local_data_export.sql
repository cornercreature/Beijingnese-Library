--
-- PostgreSQL database dump
--

\restrict fEZrWMiWDbU9KwX0d743oeXaNEqOI8O5cTRBeOxBWR7np1c6sFjdL7kQLzrHhpK

-- Dumped from database version 14.20 (Homebrew)
-- Dumped by pg_dump version 14.20 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: nicolesun
--

INSERT INTO public."SequelizeMeta" VALUES ('20251125212633-create-words.js');
INSERT INTO public."SequelizeMeta" VALUES ('20251125212726-create-pinyin-syllables.js');
INSERT INTO public."SequelizeMeta" VALUES ('20251125212809-create-example-sentences.js');
INSERT INTO public."SequelizeMeta" VALUES ('20251125212847-create-photos.js');
INSERT INTO public."SequelizeMeta" VALUES ('20251208223657-allow-null-english-translation.js');
INSERT INTO public."SequelizeMeta" VALUES ('20260101000000-create-word-recordings.js');


--
-- Data for Name: words; Type: TABLE DATA; Schema: public; Owner: nicolesun
--

INSERT INTO public.words VALUES (31, '局儿', 'júr', 'Social gathering (typically among friends)', '场合、局面、社交活动', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.175-05', '2025-12-02 14:55:20.175-05');
INSERT INTO public.words VALUES (37, '搁那儿呢', 'gē nàr ne', 'right there', '在那里、放那里了', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.185-05', '2025-12-02 14:55:20.185-05');
INSERT INTO public.words VALUES (39, '老家儿', 'lǎo jiār', 'elders', '老人家', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.19-05', '2025-12-02 14:55:20.19-05');
INSERT INTO public.words VALUES (43, '麻利儿的', 'má līur de', 'Make it snappy; quickly; speedily', '快，利索', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.196-05', '2025-12-02 14:55:20.196-05');
INSERT INTO public.words VALUES (44, '土鳖', 'tǔ biē', 'Country bumpkin; someone unsophisticated', '土农民范儿', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.198-05', '2025-12-02 14:55:20.198-05');
INSERT INTO public.words VALUES (45, '眼目前儿', 'yǎn mù qiánr', 'Of the instant; at this moment; right now', '当下', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.199-05', '2025-12-02 14:55:20.199-05');
INSERT INTO public.words VALUES (46, '搓饭', 'cuō fàn', 'To grab food together', '吃饭，尤其指聚餐', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.203-05', '2025-12-02 14:55:20.203-05');
INSERT INTO public.words VALUES (47, '姐们儿', 'jiě menr', 'Close female friend; bestie', '女性好朋友，', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.205-05', '2025-12-02 14:55:20.205-05');
INSERT INTO public.words VALUES (48, '抠门儿', 'kōu ménr', 'Stingy; cheap', '吝啬、小气', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.206-05', '2025-12-02 14:55:20.206-05');
INSERT INTO public.words VALUES (49, '蔫儿坏', 'niānr huài', 'Sneaky; unassumingly of ill-intent', '表面老实，暗地里使坏', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.208-05', '2025-12-02 14:55:20.208-05');
INSERT INTO public.words VALUES (50, '甭提了', 'béng tí le', 'Don’t even mention it; it was terrible', '别提了，表感叹', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.21-05', '2025-12-02 14:55:20.21-05');
INSERT INTO public.words VALUES (51, '地界儿', 'dì jièr', 'Area; neighborhood; territory', '地方、区域', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.212-05', '2025-12-02 14:55:20.212-05');
INSERT INTO public.words VALUES (52, '扒拉', 'bā la', 'To prod; To poke around', '用手拨弄、翻找', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.213-05', '2025-12-02 14:55:20.213-05');
INSERT INTO public.words VALUES (53, '撒丫子', 'sā yā z', 'To run quickly', '跑、赶紧跑', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.214-05', '2025-12-02 14:55:20.214-05');
INSERT INTO public.words VALUES (54, '开涮', 'kāi shuàn', 'To joke and kid; to make fun of', '开玩笑、打趣', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.216-05', '2025-12-02 14:55:20.216-05');
INSERT INTO public.words VALUES (55, '顶缸', 'dǐng gāng', 'To take blame for', '替人受过、背锅', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.217-05', '2025-12-02 14:55:20.217-05');
INSERT INTO public.words VALUES (56, '碍眼', 'ài yǎn', 'Something unpleasant or irritating', '看着不舒服、讨人嫌', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.219-05', '2025-12-02 14:55:20.219-05');
INSERT INTO public.words VALUES (60, '摔咧子', 'shuāi liē zi', 'Having an attitude', '耍脾气、闹性子', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.226-05', '2025-12-02 14:55:20.226-05');
INSERT INTO public.words VALUES (3, '且着呢', 'qiě zhe ne', 'it''s going to take a while.', '表示时间还没到、事情还得等一等。', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.112-05', '2025-12-02 14:55:20.112-05');
INSERT INTO public.words VALUES (8, '嚯', 'huǒ/huò', 'woah!', '表示惊讶。', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.134-05', '2025-12-02 14:55:20.134-05');
INSERT INTO public.words VALUES (13, '套瓷', 'tào cí', 'to cozy up to someone; to act overly familiar to gain favor', '套近乎、拉关系、假装熟悉', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.147-05', '2025-12-02 14:55:20.147-05');
INSERT INTO public.words VALUES (14, '大耳贴子', 'dà ěr tiē zi', 'a slap across the face', '巴掌、耳光', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.148-05', '2025-12-02 14:55:20.148-05');
INSERT INTO public.words VALUES (15, '怂蛋包', 'sǒng dàn bāo', 'coward; wimp; weakling', '不硬气、胆小鬼、懦弱的人（带贬义）', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.15-05', '2025-12-02 14:55:20.15-05');
INSERT INTO public.words VALUES (16, '夜么虎', 'yè me hǔ', 'bat', '蝙蝠', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.152-05', '2025-12-02 14:55:20.152-05');
INSERT INTO public.words VALUES (17, '铁磁', 'tiě cí', 'best buddy; close friend', '非常要好的朋友、哥们儿', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.154-05', '2025-12-02 14:55:20.154-05');
INSERT INTO public.words VALUES (18, '逗闷子', 'dòu mèn zi', 'to joke around; to tease for fun', '开玩笑、打趣、逗乐', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.156-05', '2025-12-02 14:55:20.156-05');
INSERT INTO public.words VALUES (19, '大拿', 'dà ná', 'an expert', '行家里手、专家、大人物', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.157-05', '2025-12-02 14:55:20.157-05');
INSERT INTO public.words VALUES (20, 'der', 'dēr', 'too much; excessively', '形容特别厉害、太、特别', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.159-05', '2025-12-02 14:55:20.159-05');
INSERT INTO public.words VALUES (21, '嘛呢', 'ma ne', 'what''s up (colloqial)', '干什么呢（口语化）', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.161-05', '2025-12-02 14:55:20.161-05');
INSERT INTO public.words VALUES (23, '歇菜', 'xiē cài', 'done for; failed', '完了、失败了、挂了（多用于口语）', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.164-05', '2025-12-02 14:55:20.164-05');
INSERT INTO public.words VALUES (57, '瓷器', 'cí qì', 'Really good friend; ride or die', '好兄弟、血兄弟', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.22-05', '2025-12-02 14:55:20.22-05');
INSERT INTO public.words VALUES (58, '有样儿', 'yǒu yàngr', 'Charismatic', '有范儿、有派头、有气势', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.222-05', '2025-12-02 14:55:20.222-05');
INSERT INTO public.words VALUES (59, '拿样儿', 'ná yàngr', 'Uncharismatic and faking it', '棱状、没范儿硬装、摆架子', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.224-05', '2025-12-02 14:55:20.224-05');
INSERT INTO public.words VALUES (26, '忒儿喽', 'tēr lóu', 'to slurp', '吃面条吸进嘴里的声音/吸鼻涕', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.168-05', '2025-12-02 14:55:20.168-05');
INSERT INTO public.words VALUES (27, '倍儿', 'bèr', 'extremely; super', '特别、非常', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.17-05', '2025-12-02 14:55:20.17-05');
INSERT INTO public.words VALUES (28, '忒', 'tēi / tè', 'too; overwhelmingly', '太、特别', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.171-05', '2025-12-02 14:55:20.171-05');
INSERT INTO public.words VALUES (29, '甭管', 'béng guǎn', 'don’t worry about... (assuring tone)', '不用管、不论、无论', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.173-05', '2025-12-02 14:55:20.173-05');
INSERT INTO public.words VALUES (30, '糙', 'cāo', 'rough; undetailed', '粗糙、不精细、粗鲁', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.174-05', '2025-12-02 14:55:20.174-05');
INSERT INTO public.words VALUES (32, '玩儿命', 'wár mìng', 'to go all out', '拼命', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.177-05', '2025-12-02 14:55:20.177-05');
INSERT INTO public.words VALUES (33, '瓷实', 'cí shi', 'someone or something reliable', '结实、靠谱', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.179-05', '2025-12-02 14:55:20.179-05');
INSERT INTO public.words VALUES (34, '寒碜', 'hán chen', 'shabby; pitiful', '寒酸、难看', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.18-05', '2025-12-02 14:55:20.18-05');
INSERT INTO public.words VALUES (35, '特么', 'tè me', 'damn (expletive)', '吐槽语气词, 类似于普通话“他妈的”', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.182-05', '2025-12-02 14:55:20.182-05');
INSERT INTO public.words VALUES (36, '较劲儿', 'jiào jìnr', 'to be stubborn; to staunchly hold one''s opinion', '别和我犟、别较真', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.183-05', '2025-12-02 14:55:20.183-05');
INSERT INTO public.words VALUES (40, '硌应', 'gè ying', 'something gross or uncomfortable', '蔑视 不喜欢', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.191-05', '2025-12-02 14:55:20.191-05');
INSERT INTO public.words VALUES (41, '露怯', 'lòu qiè', 'to be vulnerable; a public display of fears, weaknesses, and concerns', '软肋', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.193-05', '2025-12-02 14:55:20.193-05');
INSERT INTO public.words VALUES (42, '鸡贼', 'jī zéi', 'to be sly', '耍心眼儿', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.194-05', '2025-12-02 14:55:20.194-05');
INSERT INTO public.words VALUES (38, '豆汁儿', 'dòu zhīr', 'a beijingnese fermented bean drink.', '一种发酵过的豆制饮品', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.188-05', '2025-12-02 14:55:20.188-05');
INSERT INTO public.words VALUES (65, '岔架', 'qià jià', 'To argue; to fight', '吵架、打闹', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.237-05', '2025-12-02 14:55:20.237-05');
INSERT INTO public.words VALUES (69, '邋里邋遢', 'lē lǐ lē tē', 'Sloppy; untidy; messy', '形容人或环境很脏乱、不讲卫生', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.242-05', '2025-12-02 14:55:20.242-05');
INSERT INTO public.words VALUES (72, '哥们儿', 'gē mèr', 'Bro; buddy; close male friend', '兄弟、好朋友；常用于男性之间的亲密称呼', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.247-05', '2025-12-02 14:55:20.247-05');
INSERT INTO public.words VALUES (73, '哩个儿愣', 'lī gèr lēng', 'Clumsy or bumbling; dazed or awkward', '形容人傻愣愣、反应慢、不机灵', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.248-05', '2025-12-02 14:55:20.248-05');
INSERT INTO public.words VALUES (75, '不着调', 'bù zháo diào', 'Unreliable; out of line; foolish or inappropriate in behavior.', '不靠谱、胡来、不正经', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.252-05', '2025-12-02 14:55:20.252-05');
INSERT INTO public.words VALUES (76, '打岔', 'dǎ chà', 'Interrupt; change the subject', '换话题、插嘴、打断别人说话', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.253-05', '2025-12-02 14:55:20.253-05');
INSERT INTO public.words VALUES (77, '大逼斗', 'dà bī dòu', 'A loud slap', '大嘴巴子', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.254-05', '2025-12-02 14:55:20.254-05');
INSERT INTO public.words VALUES (80, '末了儿', 'mò liǎo r', 'someone of unreliable and amoral character', '最后的时候；最终结果', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.258-05', '2025-12-02 14:55:20.258-05');
INSERT INTO public.words VALUES (81, '浑不吝', 'hún bú lìn', 'At the end; in the final part.', '形容不讲道理，一点不在乎、毫不吝惜', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.259-05', '2025-12-02 14:55:20.259-05');
INSERT INTO public.words VALUES (87, '果儿', 'guǒ er', 'A flippant way of descrbing a beautiful or clever girl.', '一种轻浮地称呼伶俐或打扮时髦的女生的方式', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.267-05', '2025-12-02 14:55:20.267-05');
INSERT INTO public.words VALUES (88, '拍婆子', 'pāi pó zi', 'Descriptive of a man who is engaging in the act of chasing or dating a woman', '老北京男性搭讪女生，约会', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.268-05', '2025-12-02 14:55:20.268-05');
INSERT INTO public.words VALUES (89, '胡同串子', 'hú tòng chuàn zi', 'Someone who is always wandering around in the hutongs', '指常在胡同里混、爱闲逛的人。', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.269-05', '2025-12-02 14:55:20.269-05');
INSERT INTO public.words VALUES (93, '拔份儿', 'bá fènr', 'Stylish; respectable', '摆阔气、显威风', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.275-05', '2025-12-02 14:55:20.275-05');
INSERT INTO public.words VALUES (4, '早着呢', 'zǎo zhe ne', 'it''s still early.', '还早；离预定的时间还远，表示“不急”。', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.123-05', '2025-12-02 14:55:20.123-05');
INSERT INTO public.words VALUES (5, '捅娄子', 'tǒng lóu zi', 'to provoke trouble.', '闯祸、惹麻烦。', 'Verb', NULL, NULL, NULL, '2025-12-02 14:55:20.126-05', '2025-12-02 14:55:20.126-05');
INSERT INTO public.words VALUES (61, '自个儿', 'zì gěr', 'A way to refer to oneself', '自己称呼自己的方式 （形容自己在做什么事的时候用）', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.228-05', '2025-12-02 14:55:20.228-05');
INSERT INTO public.words VALUES (62, '熟张儿', 'shú zhāngr', 'Someone familiar', '熟人、认识的人', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.231-05', '2025-12-02 14:55:20.231-05');
INSERT INTO public.words VALUES (63, '硬茬儿', 'yìng chár', 'Someone strong; a difficult to deal with character', '厉害、不好对付的人、狠角色', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.233-05', '2025-12-02 14:55:20.233-05');
INSERT INTO public.words VALUES (64, '意会一下', 'yì huì yí xià', 'Understand (independently, by oneself)', '心领一下、自己领悟', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.235-05', '2025-12-02 14:55:20.235-05');
INSERT INTO public.words VALUES (84, '孙子', 'sūn zà zeí', 'Literally “grandson”; colloquially an insult meaning “loser” or “coward.”', '指“没出息的人”或“被耍的人”。', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.264-05', '2025-12-02 14:55:20.264-05');
INSERT INTO public.words VALUES (85, '阁儿', 'gé r', 'Interesting, intruiguing', '形容人有趣，神奇', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.265-05', '2025-12-02 14:55:20.265-05');
INSERT INTO public.words VALUES (92, '巴不能够', 'bā bù néng gòu', 'couldn''t come quicker', '迫切希望、巴不得', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.274-05', '2025-12-02 14:55:20.274-05');
INSERT INTO public.words VALUES (91, '碍事儿', 'ài shìr', 'To be in the way', '耽误事、添麻烦', 'Adjective', '/uploads/audio/1765670090707-2a7c08b3af53be96.webm', 46744, 'audio/webm', '2025-12-02 14:55:20.273-05', '2025-12-13 18:54:50.717-05');
INSERT INTO public.words VALUES (94, '半熟脸儿', 'bàn shú liǎnr', 'acquaintance; Someone one knows but not well', '认识但不熟的人', 'Noun', '/uploads/audio/1765670048412-3dd46b5e005ede3e.webm', 47582, 'audio/webm', '2025-12-02 14:55:20.277-05', '2025-12-13 18:54:08.42-05');
INSERT INTO public.words VALUES (96, '岔劈', 'chà pī', 'to mistaken; to mess up', '出错、弄混', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.28-05', '2025-12-02 14:55:20.28-05');
INSERT INTO public.words VALUES (66, '蔫', 'niār', 'Weak; unenergized; down', '没精神、低能量、虚弱', 'Adjective', '/uploads/audio/1765423357203-797a73d25ff6bb69.webm', 131150, 'audio/x-wav', '2025-12-02 14:55:20.238-05', '2025-12-10 22:22:37.206-05');
INSERT INTO public.words VALUES (83, '今儿哪儿了', 'jīr nǎr le', 'A colloquial way of asking where someone has been or what they''ve done for the day.', '今天去哪儿了？常用于询问当天行踪', 'Sayings', '/uploads/audio/1765423410302-4ef6d451ce1c36e4.webm', 51799, 'audio/webm', '2025-12-02 14:55:20.262-05', '2025-12-10 22:23:30.312-05');
INSERT INTO public.words VALUES (71, '摩挲', 'mā soù', 'To gently rub，stroke，or massage', '轻轻地抚摸、反复触摸（常带感情意味）', 'Verb', '/uploads/audio/1765408016670-beb6fdc99986ab30.webm', 69032, 'audio/webm', '2025-12-02 14:55:20.245-05', '2025-12-10 18:06:56.681-05');
INSERT INTO public.words VALUES (98, '搭茬儿', 'dā chár', 'to respond to someone''s small talk; to shoot the shit', '接话、搭讪', 'Verb', '/uploads/audio/1765423043877-e6e7f3a6fefeb942.webm', 73642, 'audio/webm', '2025-12-02 14:55:20.282-05', '2025-12-10 22:17:23.879-05');
INSERT INTO public.words VALUES (79, '得瑟', 'dè se', 'Show off; be smug or overly proud', '炫耀、显摆、臭美、自鸣得意', 'Noun', '/uploads/audio/1765407837725-58018c69676c1f7d.webm', 45739, 'audio/webm', '2025-12-02 14:55:20.256-05', '2025-12-10 18:03:57.73-05');
INSERT INTO public.words VALUES (70, '怹们', 'tān mèn', 'An honorific form of “they/them,” used respectfully for elders', '他们的尊称，多用于尊敬长辈或地位高的人', 'Noun', '/uploads/audio/1765407880844-ba794b644ee4ed12.webm', 37059, 'audio/webm', '2025-12-02 14:55:20.244-05', '2025-12-10 18:04:40.846-05');
INSERT INTO public.words VALUES (95, '不吝', 'bú lìn', 'i don''t mind; indicative of a generous attitude (but at times used ironically)', '不在乎、不介意', 'Verb', '/uploads/audio/1765407932135-dff48d54e9b1e955.webm', 48641, 'audio/webm', '2025-12-02 14:55:20.278-05', '2025-12-10 18:05:32.146-05');
INSERT INTO public.words VALUES (74, '反摊子了', 'fǎn tān zi le', 'A situation gone awry.', '比喻事情搞砸、乱套了、做不了', 'Sayings', '/uploads/audio/1765421784255-ce9d4d1742768b32.webm', 393294, 'audio/x-wav', '2025-12-02 14:55:20.25-05', '2025-12-10 21:56:24.268-05');
INSERT INTO public.words VALUES (78, '抖吧', 'dóu bà', 'To hit or beat up', '殴打', 'Verb', '/uploads/audio/1765422462490-28e4e1a5b9c0ec65.webm', 55751, 'audio/webm', '2025-12-02 14:55:20.255-05', '2025-12-10 22:07:42.499-05');
INSERT INTO public.words VALUES (97, '吃瓜落', 'chī guā lào', 'be snubbed due to a connection to someone else', '受牵连、跟着倒霉', 'Verb', '/uploads/audio/1765423070896-bda2600413288a2a.webm', 53868, 'audio/webm', '2025-12-02 14:55:20.281-05', '2025-12-10 22:17:50.899-05');
INSERT INTO public.words VALUES (82, '秃噜嘴了', 'tū lu zuǐ le', 'Let something slip; accidentally said something that should’ve been kept secret.', '说漏嘴了、无意中说出来了', 'Adjective', '/uploads/audio/1765423132594-0575cd6c09626937.webm', 524366, 'audio/x-wav', '2025-12-02 14:55:20.26-05', '2025-12-10 22:18:52.602-05');
INSERT INTO public.words VALUES (68, '挨呲儿', 'āi cīr', 'To be berated; To recieve harsh criticism', '被说教、被训斥', 'Verb', '/uploads/audio/1765423687608-7de03fce4216eb1e.webm', 44621, 'audio/webm', '2025-12-02 14:55:20.241-05', '2025-12-10 22:28:07.619-05');
INSERT INTO public.words VALUES (67, '呲儿喽', 'cīr lou', 'To berate; to criticize harshly', '训斥', 'Verb', '/uploads/audio/1765423723673-222c14b43ca6c373.webm', 55740, 'audio/webm', '2025-12-02 14:55:20.239-05', '2025-12-10 22:28:43.684-05');
INSERT INTO public.words VALUES (86, '老炮儿', 'lǎo pào er', 'An older beijing man with lots of street cred, sometimes a gangster.', '老北京的混社会、有经验、有江湖气的人。', 'Noun', '/uploads/audio/1765670218707-aa417ae4175a0589.webm', 46445, 'audio/webm', '2025-12-02 14:55:20.266-05', '2025-12-13 18:56:58.722-05');
INSERT INTO public.words VALUES (6, '乌央乌央', 'wū yāng wū yāng', 'descriptive of large groups of things.', '形容人或动物成群聚集、非常多的样子。', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.128-05', '2025-12-02 14:55:20.128-05');
INSERT INTO public.words VALUES (7, '腻歪', 'nì wai', 'be lovey-dovey.', '①（感情上）过分亲热。', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.132-05', '2025-12-02 14:55:20.132-05');
INSERT INTO public.words VALUES (9, '您搁哪儿呢', 'nín gé nǎr ne', 'where are you?', '您在哪儿呢？', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.136-05', '2025-12-02 14:55:20.136-05');
INSERT INTO public.words VALUES (10, '瓷儿', 'cír', 'close friend, bro', '朋友、哥们儿、关系很铁的人', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.14-05', '2025-12-02 14:55:20.14-05');
INSERT INTO public.words VALUES (11, '甭', 'béng', 'don''t mind them', '不用、不要（表示劝阻或否定）', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.142-05', '2025-12-02 14:55:20.142-05');
INSERT INTO public.words VALUES (12, '麻溜儿地', 'má liūr de', 'as soon as possible; make it snappy', '赶紧、快点、动作麻利地', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.144-05', '2025-12-02 14:55:20.144-05');
INSERT INTO public.words VALUES (101, '局气', 'jú qì', 'being generous', '为人仗义、大方（褒义）', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.286-05', '2025-12-02 14:55:20.286-05');
INSERT INTO public.words VALUES (102, '撒癔症', 'sā yī zhèng', 'talking or moving unconsciously in one’s sleep; sleep-talking or tossing about.', '睡梦中胡言乱语、肢体乱动', 'Noun', NULL, NULL, NULL, '2025-12-02 14:55:20.286-05', '2025-12-02 14:55:20.286-05');
INSERT INTO public.words VALUES (103, '硌硬', 'gè yìng', 'disgusting or repulsive; makes someone feel uncomfortable or grossed out.', '让人反感、恶心（心里不舒服）', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.288-05', '2025-12-02 14:55:20.288-05');
INSERT INTO public.words VALUES (22, '劳驾', 'láo jià', 'excuse me (polite interruption or way of getting attention in public)', '麻烦您一下、打扰一下（礼貌用语）', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.163-05', '2025-12-02 14:55:20.163-05');
INSERT INTO public.words VALUES (24, '得', 'dé', 'alright; got it (colloqial)', '可以/行嘞；表示同意、认可、赞许', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.165-05', '2025-12-02 14:55:20.165-05');
INSERT INTO public.words VALUES (25, '哎呦喂', 'āi yōu wèi', 'whoa; oh my!', '表示惊讶、疼痛或夸张的感叹', 'Sayings', NULL, NULL, NULL, '2025-12-02 14:55:20.166-05', '2025-12-02 14:55:20.166-05');
INSERT INTO public.words VALUES (112, '豆汁儿', 'dòu zhīr', 'a type of fermented bean drink invented in beijing.', '特属于北京的一种发酵豆制饮品', 'Noun', '/uploads/audio/1765464021373-38c41a6e60bfdd7b.webm', 69291, 'audio/webm', '2025-12-09 21:25:00.911-05', '2025-12-11 09:40:21.391-05');
INSERT INTO public.words VALUES (104, '门儿清', 'ménr qīng', 'very knowledgeable about something; knows it inside out.', '对事儿特别了解、心里有数', 'Adjective', '/uploads/audio/1765407891452-ba8ba444b2b511f8.webm', 42221, 'audio/webm', '2025-12-02 14:55:20.289-05', '2025-12-10 18:04:51.455-05');
INSERT INTO public.words VALUES (118, '您', 'nín', 'A polite way to say "you" in beijing hua. Can also be used to sass people.', '老北京人对“你”的尊称。也可以用来阴阳别人。', 'Noun', '/uploads/audio/1765471702174-165275d4bdff6b9b.webm', 58593, 'audio/webm', '2025-12-11 11:48:22.187-05', '2025-12-11 11:48:22.187-05');
INSERT INTO public.words VALUES (111, '胡同二流子', 'hú tòng èr liú zi', 'Hutong troublemakers', '指北京的混人。', 'Noun', '/uploads/audio/1765422863933-b7e62c7aa04ceb2b.webm', 56468, 'audio/webm', '2025-12-08 17:36:09.026-05', '2025-12-10 22:14:23.943-05');
INSERT INTO public.words VALUES (119, '今儿个', 'jīn r ge', 'today', '今天', 'Noun', '/uploads/audio/1765478180742-0459f9d3682a1e76.webm', 63039, 'audio/webm', '2025-12-11 13:36:20.758-05', '2025-12-11 13:36:20.758-05');
INSERT INTO public.words VALUES (107, '打眼', 'dǎ yǎn', 'a misjudgement or wrong call', '看走眼、误判（多指买东西或识人）', 'Verb', '/uploads/audio/1765422891853-7b3bf4240b3c9690.webm', 65038, 'audio/webm', '2025-12-02 14:55:20.293-05', '2025-12-10 22:14:51.856-05');
INSERT INTO public.words VALUES (105, '嚼谷儿', 'jiáo gur', 'living expenses or daily spending; money for basic needs.', '生活费、口粮（泛指开销）', 'Noun', '/uploads/audio/1765422929167-a98cde52027b2592.webm', 45871, 'audio/webm', '2025-12-02 14:55:20.29-05', '2025-12-10 22:15:29.169-05');
INSERT INTO public.words VALUES (106, '消停', 'xiāo ting', 'be quiet; stay calm; don’t cause trouble.', '安静、不折腾（表希望对方安分）', 'Adjective', '/uploads/audio/1765303268325-9952e50216a59cfc.webm', 39843, 'audio/webm', '2025-12-02 14:55:20.292-05', '2025-12-09 13:01:08.333-05');
INSERT INTO public.words VALUES (114, '有样儿', 'yoǔ yàng r', 'charismatic, charming, smooth', '有范儿、有派头、有气势', 'Adjective', '/uploads/audio/1765334907292-1c7c98b57de76010.webm', 55388, 'audio/webm', '2025-12-09 21:48:27.302-05', '2025-12-09 21:48:27.302-05');
INSERT INTO public.words VALUES (116, '意会一下', 'yì huì yí xià', 'a direction for the subject to understand what is implied.', '心领一下、自己领悟', 'Sayings', '/uploads/audio/1765336381223-bff2ab64d0a28333.webm', 48767, 'audio/webm', '2025-12-09 22:13:01.236-05', '2025-12-09 22:13:01.236-05');
INSERT INTO public.words VALUES (113, '倍儿', 'bèr', 'term used to emphasize the quality of a certain subject', '形容什么东西特别的怎么样', 'Adjective', '/uploads/audio/1765334205058-24a1a7a3ee1d3db1.webm', 39962, 'audio/webm', '2025-12-09 21:36:45.074-05', '2025-12-09 21:36:45.074-05');
INSERT INTO public.words VALUES (109, '念秧', 'niàn yāng', 'to hint or imply something indirectly; to repeatedly bring it up as a reminder.', '旁敲侧击、反复念叨（暗示别人）', 'Verb', '/uploads/audio/1765422956986-8c9a41e0cb4cb855.webm', 48281, 'audio/webm', '2025-12-02 14:55:20.294-05', '2025-12-10 22:15:56.988-05');
INSERT INTO public.words VALUES (100, '熬鹰', 'áo yīng', 'staying up late and refusing to sleep', '熬夜不睡觉（特指硬扛着不睡,）', 'Verb', '/uploads/audio/1765423004764-0050001978187138.webm', 44122, 'audio/webm', '2025-12-02 14:55:20.285-05', '2025-12-10 22:16:44.768-05');
INSERT INTO public.words VALUES (117, '拿样儿', 'ná yàng r', 'uncharismatic and faking it; a poser', '棱状、没范儿硬装、摆架子', 'Adjective', '/uploads/audio/1765423606508-1704fe03795634ea.webm', 131150, 'audio/x-wav', '2025-12-09 22:24:38.548-05', '2025-12-10 22:26:46.52-05');
INSERT INTO public.words VALUES (115, '硬茬儿', 'yìng chá r', 'someone strong; a difficult to deal with character', '厉害、不好对付的人、狠角色', 'Noun', '/uploads/audio/1765669946395-6ac90e7dfbbcd3e5.webm', 60178, 'audio/webm', '2025-12-09 21:55:24.489-05', '2025-12-13 18:52:26.409-05');
INSERT INTO public.words VALUES (108, '抖机灵', 'dǒu jī ling', 'to act clever in a petty or sly way', '耍小聪明（略带贬义）', 'Verb', '/uploads/audio/1765669985608-65cc87cdbc1c353c.webm', 51280, 'audio/webm', '2025-12-02 14:55:20.293-05', '2025-12-13 18:53:05.618-05');
INSERT INTO public.words VALUES (99, '颠儿了', 'diān r le', 'to take off; to quickly leave', '溜走、离开', 'Verb', '/uploads/audio/1765670014345-ac3d647b1905c01b.webm', 36029, 'audio/webm', '2025-12-02 14:55:20.284-05', '2025-12-13 18:53:34.359-05');


--
-- Data for Name: example_sentences; Type: TABLE DATA; Schema: public; Owner: nicolesun
--

INSERT INTO public.example_sentences VALUES (3, 3, '饭好了吗？还且着呢！', '', '2025-12-08 17:37:35.318-05', '2025-12-08 17:37:35.318-05');
INSERT INTO public.example_sentences VALUES (4, 4, '别着急，现在还早着呢。', '', '2025-12-08 17:37:35.323-05', '2025-12-08 17:37:35.323-05');
INSERT INTO public.example_sentences VALUES (5, 5, '你小子又捅娄子了吧？', '', '2025-12-08 17:37:35.324-05', '2025-12-08 17:37:35.324-05');
INSERT INTO public.example_sentences VALUES (6, 6, '外头的人乌央乌央地往里挤。', '', '2025-12-08 17:37:35.326-05', '2025-12-08 17:37:35.326-05');
INSERT INTO public.example_sentences VALUES (7, 7, '这俩人整天腻歪在一块儿。', '', '2025-12-08 17:37:35.328-05', '2025-12-08 17:37:35.328-05');
INSERT INTO public.example_sentences VALUES (8, 8, '嚯，这菜做得真漂亮！', '', '2025-12-08 17:37:35.329-05', '2025-12-08 17:37:35.329-05');
INSERT INTO public.example_sentences VALUES (9, 9, '您搁哪儿呢？我都到门口了。', '', '2025-12-08 17:37:35.331-05', '2025-12-08 17:37:35.331-05');
INSERT INTO public.example_sentences VALUES (10, 10, '咱俩这么多年老瓷儿了，还跟我客气什么。', '', '2025-12-08 17:37:35.332-05', '2025-12-08 17:37:35.332-05');
INSERT INTO public.example_sentences VALUES (11, 11, '甭管他。', '', '2025-12-08 17:37:35.355-05', '2025-12-08 17:37:35.355-05');
INSERT INTO public.example_sentences VALUES (12, 12, '现在麻溜儿地把活儿干完，咱早点走。', '', '2025-12-08 17:37:35.356-05', '2025-12-08 17:37:35.356-05');
INSERT INTO public.example_sentences VALUES (13, 13, '他那是在跟领导套瓷儿呢。', '', '2025-12-08 17:37:35.357-05', '2025-12-08 17:37:35.357-05');
INSERT INTO public.example_sentences VALUES (14, 14, '他挨了人家一个大耳贴子。', '', '2025-12-08 17:37:35.358-05', '2025-12-08 17:37:35.358-05');
INSERT INTO public.example_sentences VALUES (15, 15, '别当怂蛋包，有事儿上啊！', '', '2025-12-08 17:37:35.359-05', '2025-12-08 17:37:35.359-05');
INSERT INTO public.example_sentences VALUES (16, 17, '咱俩是铁磁，有啥都跟你说。', '', '2025-12-08 17:37:35.361-05', '2025-12-08 17:37:35.361-05');
INSERT INTO public.example_sentences VALUES (17, 18, '别生气，我就是跟你逗闷子呢。', '', '2025-12-08 17:37:35.363-05', '2025-12-08 17:37:35.363-05');
INSERT INTO public.example_sentences VALUES (18, 19, '他是圈儿里的大拿，可以找他问问。', '', '2025-12-08 17:37:35.364-05', '2025-12-08 17:37:35.364-05');
INSERT INTO public.example_sentences VALUES (19, 20, '这也太der了！', '', '2025-12-08 17:37:35.365-05', '2025-12-08 17:37:35.365-05');
INSERT INTO public.example_sentences VALUES (20, 22, '劳驾，让一让，谢谢。', '', '2025-12-08 17:37:35.366-05', '2025-12-08 17:37:35.366-05');
INSERT INTO public.example_sentences VALUES (21, 23, '这次要是再输，咱就歇菜了。', '', '2025-12-08 17:37:35.366-05', '2025-12-08 17:37:35.366-05');
INSERT INTO public.example_sentences VALUES (22, 24, '得，行嘞，就这么办。', '', '2025-12-08 17:37:35.367-05', '2025-12-08 17:37:35.367-05');
INSERT INTO public.example_sentences VALUES (23, 25, '哎呦喂，这也太贵了吧！', '', '2025-12-08 17:37:35.367-05', '2025-12-08 17:37:35.367-05');
INSERT INTO public.example_sentences VALUES (24, 26, '您就得忒儿喽着喝稀粥了！', '', '2025-12-08 17:37:35.368-05', '2025-12-08 17:37:35.368-05');
INSERT INTO public.example_sentences VALUES (25, 27, '这菜倍儿香', '', '2025-12-08 17:37:35.369-05', '2025-12-08 17:37:35.369-05');
INSERT INTO public.example_sentences VALUES (26, 28, '这事儿忒麻烦', '', '2025-12-08 17:37:35.369-05', '2025-12-08 17:37:35.369-05');
INSERT INTO public.example_sentences VALUES (27, 29, '甭管别人咋说，你就按自己的想法来。', '', '2025-12-08 17:37:35.37-05', '2025-12-08 17:37:35.37-05');
INSERT INTO public.example_sentences VALUES (28, 30, '这人干活儿太糙了。', '', '2025-12-08 17:37:35.37-05', '2025-12-08 17:37:35.37-05');
INSERT INTO public.example_sentences VALUES (29, 31, '今晚有个局儿，一起去不？', '', '2025-12-08 17:37:35.371-05', '2025-12-08 17:37:35.371-05');
INSERT INTO public.example_sentences VALUES (30, 32, '他工作起来真是玩儿命。', '', '2025-12-08 17:37:35.371-05', '2025-12-08 17:37:35.371-05');
INSERT INTO public.example_sentences VALUES (31, 33, '他这人挺瓷实的。', '', '2025-12-08 17:37:35.372-05', '2025-12-08 17:37:35.372-05');
INSERT INTO public.example_sentences VALUES (32, 34, '穿这么点儿多寒碜啊。', '', '2025-12-08 17:37:35.373-05', '2025-12-08 17:37:35.373-05');
INSERT INTO public.example_sentences VALUES (33, 35, '今儿也太特么冷了！', '', '2025-12-08 17:37:35.373-05', '2025-12-08 17:37:35.373-05');
INSERT INTO public.example_sentences VALUES (34, 36, '你就别为这事儿跟我较劲儿了。办不了！', '', '2025-12-08 17:37:35.374-05', '2025-12-08 17:37:35.374-05');
INSERT INTO public.example_sentences VALUES (35, 37, '你要的书搁那儿呢。', '', '2025-12-08 17:37:35.374-05', '2025-12-08 17:37:35.374-05');
INSERT INTO public.example_sentences VALUES (36, 38, '您喝的了豆汁儿吗？', '', '2025-12-08 17:37:35.375-05', '2025-12-08 17:37:35.375-05');
INSERT INTO public.example_sentences VALUES (37, 39, '您老家儿最近怎么样呀？', '', '2025-12-08 17:37:35.375-05', '2025-12-08 17:37:35.375-05');
INSERT INTO public.example_sentences VALUES (38, 40, '他这样做也太膈应了吧！', '', '2025-12-08 17:37:35.376-05', '2025-12-08 17:37:35.376-05');
INSERT INTO public.example_sentences VALUES (39, 41, '他对自己特别不自信，一不小心就向别人露怯。', '', '2025-12-08 17:37:35.377-05', '2025-12-08 17:37:35.377-05');
INSERT INTO public.example_sentences VALUES (40, 42, '这个人怎么这么鸡贼，连这点事都要算计半天。', '', '2025-12-08 17:37:35.377-05', '2025-12-08 17:37:35.377-05');
INSERT INTO public.example_sentences VALUES (41, 43, '工作别拖延，赶紧麻利儿的把它干完！', '', '2025-12-08 17:37:35.378-05', '2025-12-08 17:37:35.378-05');
INSERT INTO public.example_sentences VALUES (42, 44, '这打扮也太土鳖了点儿吧。', '', '2025-12-08 17:37:35.378-05', '2025-12-08 17:37:35.378-05');
INSERT INTO public.example_sentences VALUES (43, 45, '眼目前儿最重要的就是赶工。', '', '2025-12-08 17:37:35.379-05', '2025-12-08 17:37:35.379-05');
INSERT INTO public.example_sentences VALUES (44, 46, '中午搓个饭去？', '', '2025-12-08 17:37:35.38-05', '2025-12-08 17:37:35.38-05');
INSERT INTO public.example_sentences VALUES (45, 47, '她是我多年的老姐们儿。', '', '2025-12-08 17:37:35.38-05', '2025-12-08 17:37:35.38-05');
INSERT INTO public.example_sentences VALUES (46, 48, '他那人特抠门儿，连水都舍不得买瓶的。', '', '2025-12-08 17:37:35.381-05', '2025-12-08 17:37:35.381-05');
INSERT INTO public.example_sentences VALUES (47, 49, '别看他不吭声，蔫儿坏着呢。', '', '2025-12-08 17:37:35.381-05', '2025-12-08 17:37:35.381-05');
INSERT INTO public.example_sentences VALUES (48, 50, '甭提了，那天可真倒霉。', '', '2025-12-08 17:37:35.382-05', '2025-12-08 17:37:35.382-05');
INSERT INTO public.example_sentences VALUES (49, 50, '那次旅行甭提多痛快了', '', '2025-12-08 17:37:35.382-05', '2025-12-08 17:37:35.382-05');
INSERT INTO public.example_sentences VALUES (50, 51, '这地界儿我熟，跟我走准没错。', '', '2025-12-08 17:37:35.383-05', '2025-12-08 17:37:35.383-05');
INSERT INTO public.example_sentences VALUES (51, 52, '别老扒拉菜，好好吃饭！', '', '2025-12-08 17:37:35.383-05', '2025-12-08 17:37:35.383-05');
INSERT INTO public.example_sentences VALUES (52, 53, 'i快撒丫子跑，别被逮着！', '', '2025-12-08 17:37:35.384-05', '2025-12-08 17:37:35.384-05');
INSERT INTO public.example_sentences VALUES (53, 54, '别拿我开涮了，我是真不知道！', '', '2025-12-08 17:37:35.384-05', '2025-12-08 17:37:35.384-05');
INSERT INTO public.example_sentences VALUES (54, 55, '他被抓去顶缸了。', '', '2025-12-08 17:37:35.385-05', '2025-12-08 17:37:35.385-05');
INSERT INTO public.example_sentences VALUES (55, 56, '这破玩意儿真碍眼，赶紧收走。', '', '2025-12-08 17:37:35.385-05', '2025-12-08 17:37:35.385-05');
INSERT INTO public.example_sentences VALUES (56, 57, '我和他老瓷器了，啥都能交代。', '', '2025-12-08 17:37:35.386-05', '2025-12-08 17:37:35.386-05');
INSERT INTO public.example_sentences VALUES (57, 58, '他今天打扮得挺有样儿的。', '', '2025-12-08 17:37:35.386-05', '2025-12-08 17:37:35.386-05');
INSERT INTO public.example_sentences VALUES (58, 59, '他成天那样那样儿以为我们看不出来，真是把我们当傻子啊。', '', '2025-12-08 17:37:35.387-05', '2025-12-08 17:37:35.387-05');
INSERT INTO public.example_sentences VALUES (59, 60, '别跟我摔咧子，有事好好说。', '', '2025-12-08 17:37:35.387-05', '2025-12-08 17:37:35.387-05');
INSERT INTO public.example_sentences VALUES (60, 61, '我自个儿弄不行，还是你来吧', '', '2025-12-08 17:37:35.388-05', '2025-12-08 17:37:35.388-05');
INSERT INTO public.example_sentences VALUES (61, 62, '那人是我熟张儿，我俩好久之前就认识了。', '', '2025-12-08 17:37:35.388-05', '2025-12-08 17:37:35.388-05');
INSERT INTO public.example_sentences VALUES (62, 63, '那人是个硬茬儿，估计不好打。', '', '2025-12-08 17:37:35.389-05', '2025-12-08 17:37:35.389-05');
INSERT INTO public.example_sentences VALUES (63, 64, '意思我就不直说了，你自己意会意会一下吧。', '', '2025-12-08 17:37:35.389-05', '2025-12-08 17:37:35.389-05');
INSERT INTO public.example_sentences VALUES (64, 65, '别岔架！有事就说，咱们和平处理。', '', '2025-12-08 17:37:35.39-05', '2025-12-08 17:37:35.39-05');
INSERT INTO public.example_sentences VALUES (65, 66, '你怎么蔫儿了啊？身体不舒服吗。', '', '2025-12-08 17:37:35.39-05', '2025-12-08 17:37:35.39-05');
INSERT INTO public.example_sentences VALUES (66, 67, 'A：你今天怎么这么不开心呀？B：被家里人呲儿喽了，有点委屈。', '', '2025-12-08 17:37:35.391-05', '2025-12-08 17:37:35.391-05');
INSERT INTO public.example_sentences VALUES (67, 68, '这样天天埃呲儿，谁受的了啊。', '', '2025-12-08 17:37:35.391-05', '2025-12-08 17:37:35.391-05');
INSERT INTO public.example_sentences VALUES (68, 69, '他整天邋里邋遢的，屋里乱得都下不去脚。', '', '2025-12-08 17:37:35.392-05', '2025-12-08 17:37:35.392-05');
INSERT INTO public.example_sentences VALUES (69, 70, '怹们家老爷子身体好着呢。', '', '2025-12-08 17:37:35.392-05', '2025-12-08 17:37:35.392-05');
INSERT INTO public.example_sentences VALUES (70, 71, '腿跑疼了可以自己摩挲摩挲。', '', '2025-12-08 17:37:35.393-05', '2025-12-08 17:37:35.393-05');
INSERT INTO public.example_sentences VALUES (71, 72, '咱俩这么多年哥们儿，还跟我客气什么。', '', '2025-12-08 17:37:35.394-05', '2025-12-08 17:37:35.394-05');
INSERT INTO public.example_sentences VALUES (72, 73, '上课没人听话老师就会说你们别这儿哩个儿愣的', '', '2025-12-08 17:37:35.394-05', '2025-12-08 17:37:35.394-05');
INSERT INTO public.example_sentences VALUES (73, 74, '你那个面馆要还开吗？不行，做不下去了，反摊子了。', '', '2025-12-08 17:37:35.395-05', '2025-12-08 17:37:35.395-05');
INSERT INTO public.example_sentences VALUES (74, 75, '他这人老不着调，别信他那套。', '', '2025-12-08 17:37:35.395-05', '2025-12-08 17:37:35.395-05');
INSERT INTO public.example_sentences VALUES (75, 76, '我正说着呢，您先别打岔。', '', '2025-12-08 17:37:35.396-05', '2025-12-08 17:37:35.396-05');
INSERT INTO public.example_sentences VALUES (76, 77, '狗哥挨了猫姐三个大逼斗。', '', '2025-12-08 17:37:35.396-05', '2025-12-08 17:37:35.396-05');
INSERT INTO public.example_sentences VALUES (77, 78, '小心你再在我面前得瑟我就抖吧你', '', '2025-12-08 17:37:35.397-05', '2025-12-08 17:37:35.397-05');
INSERT INTO public.example_sentences VALUES (78, 79, '你行了，别得瑟，刚赢一回就上天了。', '', '2025-12-08 17:37:35.397-05', '2025-12-08 17:37:35.397-05');
INSERT INTO public.example_sentences VALUES (79, 80, '末了儿他一句话全给整明白了。', '', '2025-12-08 17:37:35.398-05', '2025-12-08 17:37:35.398-05');
INSERT INTO public.example_sentences VALUES (80, 81, '他借了人家的钱不还，真是浑不吝啊！', '', '2025-12-08 17:37:35.398-05', '2025-12-08 17:37:35.398-05');
INSERT INTO public.example_sentences VALUES (81, 82, '哎呀我秃噜嘴了，这事儿你别传出去。', '', '2025-12-08 17:37:35.399-05', '2025-12-08 17:37:35.399-05');
INSERT INTO public.example_sentences VALUES (82, 84, '孙子! (骂人）', '', '2025-12-08 17:37:35.4-05', '2025-12-08 17:37:35.4-05');
INSERT INTO public.example_sentences VALUES (83, 85, '这人太阁儿了', '', '2025-12-08 17:37:35.401-05', '2025-12-08 17:37:35.401-05');
INSERT INTO public.example_sentences VALUES (84, 86, '这位是地道的老炮儿，讲究着呢。', '', '2025-12-08 17:37:35.401-05', '2025-12-08 17:37:35.401-05');
INSERT INTO public.example_sentences VALUES (85, 87, '这小果儿挺机灵。', '', '2025-12-08 17:37:35.403-05', '2025-12-08 17:37:35.403-05');
INSERT INTO public.example_sentences VALUES (86, 91, '你这么着太碍事儿了', '', '2025-12-08 17:37:35.404-05', '2025-12-08 17:37:35.404-05');
INSERT INTO public.example_sentences VALUES (87, 92, '我巴不能够早点见着老伙计', '', '2025-12-08 17:37:35.405-05', '2025-12-08 17:37:35.405-05');
INSERT INTO public.example_sentences VALUES (88, 93, '他就爱穿名牌拔份儿', '', '2025-12-08 17:37:35.406-05', '2025-12-08 17:37:35.406-05');
INSERT INTO public.example_sentences VALUES (89, 94, '那是个半熟脸儿，叫不上名', '', '2025-12-08 17:37:35.406-05', '2025-12-08 17:37:35.406-05');
INSERT INTO public.example_sentences VALUES (90, 95, '这点小亏我不吝', '', '2025-12-08 17:37:35.407-05', '2025-12-08 17:37:35.407-05');
INSERT INTO public.example_sentences VALUES (91, 96, '这事儿别办岔劈了', '', '2025-12-08 17:37:35.407-05', '2025-12-08 17:37:35.407-05');
INSERT INTO public.example_sentences VALUES (92, 97, '他犯错，我也跟着吃瓜落', '', '2025-12-08 17:37:35.408-05', '2025-12-08 17:37:35.408-05');
INSERT INTO public.example_sentences VALUES (93, 98, '别随便跟陌生人搭茬儿', '', '2025-12-08 17:37:35.408-05', '2025-12-08 17:37:35.408-05');
INSERT INTO public.example_sentences VALUES (94, 99, '他一看情况不对就颠儿了', '', '2025-12-08 17:37:35.409-05', '2025-12-08 17:37:35.409-05');
INSERT INTO public.example_sentences VALUES (95, 100, '场景：朋友凌晨聊天
A：“你咋还没睡？这都三点了！”
B：“昨晚跟哥们儿熬鹰打扑克，现在一点儿不困，悔死了！”', '', '2025-12-08 17:37:35.409-05', '2025-12-08 17:37:35.409-05');
INSERT INTO public.example_sentences VALUES (96, 101, '场景：同事聚餐结账
A：“这次我来买单，别跟我抢！”
B：“还是你局气！上次你帮我解围，这次该我来！”', '', '2025-12-08 17:37:35.41-05', '2025-12-08 17:37:35.41-05');
INSERT INTO public.example_sentences VALUES (97, 102, '场景：室友早起吐槽
A：“你昨晚半夜撒癔症，喊着‘别跑’，吓我一跳！”
B：啊？我做梦追公交呢，没吵着你睡觉吧？”', '', '2025-12-08 17:37:35.41-05', '2025-12-08 17:37:35.41-05');
INSERT INTO public.example_sentences VALUES (98, 103, '场景：看到不文明行为
A：“他当众插队还理直气壮，太硌硬人了！”
B：“别搭理这种人，越计较越堵得慌。”', '', '2025-12-08 17:37:35.411-05', '2025-12-08 17:37:35.411-05');
INSERT INTO public.example_sentences VALUES (99, 104, '场景：打听旅游路线
A：“去胡同逛该走哪条线啊？”
B：“这你问我算找对人了，我对老北京胡同门儿清！”', '', '2025-12-08 17:37:35.411-05', '2025-12-08 17:37:35.411-05');
INSERT INTO public.example_sentences VALUES (100, 105, '场景：聊工资支配
A：“每月工资刚发就光，不够嚼谷的！”
B：“省着点花，我都把房租和嚼谷单独存起来。”', '', '2025-12-08 17:37:35.412-05', '2025-12-08 17:37:35.412-05');
INSERT INTO public.example_sentences VALUES (101, 106, '场景：孩子吵闹时
A：“你俩别在屋里疯跑了，让我消停会儿行不？”
B：“知道了妈！我们去院子里玩，不吵你了。”', '', '2025-12-08 17:37:35.412-05', '2025-12-08 17:37:35.412-05');
INSERT INTO public.example_sentences VALUES (102, 107, '场景：买古玩被骗
A：“我以为这是真古董，结果是仿品，真是打眼了！”
B：“老物件水太深，下次得找懂行的陪着。”', '', '2025-12-08 17:37:35.413-05', '2025-12-08 17:37:35.413-05');
INSERT INTO public.example_sentences VALUES (103, 108, '场景：工作对接
A：“别总想着抖机灵偷懒，这活儿得踏踏实实做。”
B：“我错了，这就按要求重新弄，不耍滑了。”', '', '2025-12-08 17:37:35.413-05', '2025-12-08 17:37:35.413-05');
INSERT INTO public.example_sentences VALUES (104, 109, '场景：提醒朋友还钱
A：“最近交房租手头紧，连买菜都得算计着来……”
B：“别念秧了！欠你的钱这周末准还你，我记着呢！”', '', '2025-12-08 17:37:35.414-05', '2025-12-08 17:37:35.414-05');
INSERT INTO public.example_sentences VALUES (105, 106, '已经十二点了，你们消停消停，别一会儿搞的邻居睡不着觉向物业举报我们。', 'its already twelve so quiet down! i don''t want our neighbors file report us because they can''t sleep.', '2025-12-09 13:20:52.992-05', '2025-12-09 13:20:52.992-05');
INSERT INTO public.example_sentences VALUES (106, 106, '你咋这么癫呢，你消停消停。', 'why are you tweaking like calm down', '2025-12-09 16:14:55.091-05', '2025-12-09 16:14:55.091-05');
INSERT INTO public.example_sentences VALUES (107, 114, '这人多有样儿', 'This person looks great', '2025-12-09 21:49:44.435-05', '2025-12-09 21:49:44.435-05');
INSERT INTO public.example_sentences VALUES (108, 117, '他成天那样那样儿以为我们看不出来，真是把我们当傻子啊。', 'he must be stupid if he thinks we can''t tell that he''s a 24/7 poser.', '2025-12-09 22:24:38.589-05', '2025-12-09 22:24:38.589-05');
INSERT INTO public.example_sentences VALUES (109, 113, '他那面包做的倍儿硬，都能用来打人了！', 'the bread he bakes is so hard, you could use it to beat people with!', '2025-12-09 22:32:09.015-05', '2025-12-09 22:32:09.015-05');
INSERT INTO public.example_sentences VALUES (110, 112, '我可喝不了豆汁儿，那玩意儿也太味儿了！', 'douzhir? i can''t drink that stuff at all. its too pungent!', '2025-12-09 22:40:04.795-05', '2025-12-09 22:40:04.795-05');
INSERT INTO public.example_sentences VALUES (111, 116, '你自己意会一下。', 'u feel feel u self <3', '2025-12-11 11:42:32.978-05', '2025-12-11 11:42:32.978-05');
INSERT INTO public.example_sentences VALUES (112, 112, '赵格格爱喝豆汁', 'zhao gege loves douzhi', '2025-12-11 11:44:15.205-05', '2025-12-11 11:44:15.205-05');
INSERT INTO public.example_sentences VALUES (113, 115, 'Yogi 不觉得自己是个硬茬儿。', 'Yogi thinks he''s pretty chill.', '2025-12-11 11:46:03.808-05', '2025-12-11 11:46:03.808-05');
INSERT INTO public.example_sentences VALUES (114, 118, '您好！', 'hello！', '2025-12-11 11:48:22.222-05', '2025-12-11 11:48:22.222-05');
INSERT INTO public.example_sentences VALUES (115, 118, '您可真行', 'ok gurl', '2025-12-11 11:49:15.475-05', '2025-12-11 11:49:15.475-05');
INSERT INTO public.example_sentences VALUES (116, 118, '您喜欢猴子吗？', 'do u like monkeysss?', '2025-12-11 13:24:29.449-05', '2025-12-11 13:24:29.449-05');
INSERT INTO public.example_sentences VALUES (117, 119, '今儿个我俩要飞啦', 'we''re flying away from this shithole TODAY!', '2025-12-11 13:36:20.787-05', '2025-12-11 13:36:20.787-05');


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: nicolesun
--



--
-- Data for Name: pinyin_syllables; Type: TABLE DATA; Schema: public; Owner: nicolesun
--

INSERT INTO public.pinyin_syllables VALUES (422, 111, 'hú', '胡', 2, 0, '2025-12-08 17:36:09.036-05', '2025-12-08 17:36:09.036-05');
INSERT INTO public.pinyin_syllables VALUES (423, 111, 'tòng', '同', 4, 1, '2025-12-08 17:36:09.04-05', '2025-12-08 17:36:09.04-05');
INSERT INTO public.pinyin_syllables VALUES (5, 3, 'qiě', '且', 3, 0, '2025-12-02 14:55:20.118-05', '2025-12-02 14:55:20.118-05');
INSERT INTO public.pinyin_syllables VALUES (6, 3, 'zhe', '着', 0, 1, '2025-12-02 14:55:20.12-05', '2025-12-02 14:55:20.12-05');
INSERT INTO public.pinyin_syllables VALUES (7, 3, 'ne', '呢', 0, 2, '2025-12-02 14:55:20.121-05', '2025-12-02 14:55:20.121-05');
INSERT INTO public.pinyin_syllables VALUES (8, 4, 'zǎo', '早', 3, 0, '2025-12-02 14:55:20.124-05', '2025-12-02 14:55:20.124-05');
INSERT INTO public.pinyin_syllables VALUES (9, 4, 'zhe', '着', 0, 1, '2025-12-02 14:55:20.124-05', '2025-12-02 14:55:20.124-05');
INSERT INTO public.pinyin_syllables VALUES (10, 4, 'ne', '呢', 0, 2, '2025-12-02 14:55:20.125-05', '2025-12-02 14:55:20.125-05');
INSERT INTO public.pinyin_syllables VALUES (11, 5, 'tǒng', '捅', 3, 0, '2025-12-02 14:55:20.126-05', '2025-12-02 14:55:20.126-05');
INSERT INTO public.pinyin_syllables VALUES (12, 5, 'lóu', '娄', 2, 1, '2025-12-02 14:55:20.127-05', '2025-12-02 14:55:20.127-05');
INSERT INTO public.pinyin_syllables VALUES (13, 5, 'zi', '子', 0, 2, '2025-12-02 14:55:20.127-05', '2025-12-02 14:55:20.127-05');
INSERT INTO public.pinyin_syllables VALUES (14, 6, 'wū', '乌', 1, 0, '2025-12-02 14:55:20.129-05', '2025-12-02 14:55:20.129-05');
INSERT INTO public.pinyin_syllables VALUES (15, 6, 'yāng', '央', 1, 1, '2025-12-02 14:55:20.129-05', '2025-12-02 14:55:20.129-05');
INSERT INTO public.pinyin_syllables VALUES (16, 6, 'wū', '乌', 1, 2, '2025-12-02 14:55:20.13-05', '2025-12-02 14:55:20.13-05');
INSERT INTO public.pinyin_syllables VALUES (17, 6, 'yāng', '央', 1, 3, '2025-12-02 14:55:20.13-05', '2025-12-02 14:55:20.13-05');
INSERT INTO public.pinyin_syllables VALUES (18, 7, 'nì', '腻', 4, 0, '2025-12-02 14:55:20.132-05', '2025-12-02 14:55:20.132-05');
INSERT INTO public.pinyin_syllables VALUES (19, 7, 'wai', '歪', 0, 1, '2025-12-02 14:55:20.133-05', '2025-12-02 14:55:20.133-05');
INSERT INTO public.pinyin_syllables VALUES (20, 8, 'huǒ/huò', '嚯', 3, 0, '2025-12-02 14:55:20.135-05', '2025-12-02 14:55:20.135-05');
INSERT INTO public.pinyin_syllables VALUES (424, 111, 'èr', '二', 4, 2, '2025-12-08 17:36:09.041-05', '2025-12-08 17:36:09.041-05');
INSERT INTO public.pinyin_syllables VALUES (425, 111, 'liú', '流', 2, 3, '2025-12-08 17:36:09.042-05', '2025-12-08 17:36:09.042-05');
INSERT INTO public.pinyin_syllables VALUES (426, 111, 'zi', '子', 0, 4, '2025-12-08 17:36:09.042-05', '2025-12-08 17:36:09.042-05');
INSERT INTO public.pinyin_syllables VALUES (74, 31, 'ju', '局', 0, 0, '2025-12-02 14:55:20.176-05', '2025-12-02 14:55:20.176-05');
INSERT INTO public.pinyin_syllables VALUES (75, 31, 'r', '儿', 0, 1, '2025-12-02 14:55:20.176-05', '2025-12-02 14:55:20.176-05');
INSERT INTO public.pinyin_syllables VALUES (26, 10, 'cir', '瓷', 0, 0, '2025-12-02 14:55:20.14-05', '2025-12-02 14:55:20.14-05');
INSERT INTO public.pinyin_syllables VALUES (27, 10, 'cir', '儿', 0, 1, '2025-12-02 14:55:20.141-05', '2025-12-02 14:55:20.141-05');
INSERT INTO public.pinyin_syllables VALUES (28, 11, 'béng', '甭', 2, 0, '2025-12-02 14:55:20.143-05', '2025-12-02 14:55:20.143-05');
INSERT INTO public.pinyin_syllables VALUES (435, 115, 'yìng', '硬', 4, 0, '2025-12-09 21:55:24.497-05', '2025-12-09 21:55:24.497-05');
INSERT INTO public.pinyin_syllables VALUES (436, 115, 'chá', '茬', 2, 1, '2025-12-09 21:55:24.497-05', '2025-12-09 21:55:24.497-05');
INSERT INTO public.pinyin_syllables VALUES (437, 115, 'r', '儿', 0, 2, '2025-12-09 21:55:24.497-05', '2025-12-09 21:55:24.497-05');
INSERT INTO public.pinyin_syllables VALUES (446, 119, 'jīn', '今', 1, 0, '2025-12-11 13:36:20.765-05', '2025-12-11 13:36:20.765-05');
INSERT INTO public.pinyin_syllables VALUES (33, 13, 'tào', '套', 4, 0, '2025-12-02 14:55:20.147-05', '2025-12-02 14:55:20.147-05');
INSERT INTO public.pinyin_syllables VALUES (34, 13, 'cí', '瓷', 2, 1, '2025-12-02 14:55:20.147-05', '2025-12-02 14:55:20.147-05');
INSERT INTO public.pinyin_syllables VALUES (35, 14, 'dà', '大', 4, 0, '2025-12-02 14:55:20.149-05', '2025-12-02 14:55:20.149-05');
INSERT INTO public.pinyin_syllables VALUES (36, 14, 'ěr', '耳', 3, 1, '2025-12-02 14:55:20.149-05', '2025-12-02 14:55:20.149-05');
INSERT INTO public.pinyin_syllables VALUES (37, 14, 'tiē', '贴', 1, 2, '2025-12-02 14:55:20.149-05', '2025-12-02 14:55:20.149-05');
INSERT INTO public.pinyin_syllables VALUES (38, 14, 'zi', '子', 0, 3, '2025-12-02 14:55:20.149-05', '2025-12-02 14:55:20.149-05');
INSERT INTO public.pinyin_syllables VALUES (39, 15, 'sǒng', '怂', 3, 0, '2025-12-02 14:55:20.151-05', '2025-12-02 14:55:20.151-05');
INSERT INTO public.pinyin_syllables VALUES (40, 15, 'dàn', '蛋', 4, 1, '2025-12-02 14:55:20.151-05', '2025-12-02 14:55:20.151-05');
INSERT INTO public.pinyin_syllables VALUES (41, 15, 'bāo', '包', 1, 2, '2025-12-02 14:55:20.151-05', '2025-12-02 14:55:20.151-05');
INSERT INTO public.pinyin_syllables VALUES (42, 16, 'yè', '夜', 4, 0, '2025-12-02 14:55:20.153-05', '2025-12-02 14:55:20.153-05');
INSERT INTO public.pinyin_syllables VALUES (43, 16, 'me', '么', 0, 1, '2025-12-02 14:55:20.153-05', '2025-12-02 14:55:20.153-05');
INSERT INTO public.pinyin_syllables VALUES (44, 16, 'hǔ', '虎', 3, 2, '2025-12-02 14:55:20.153-05', '2025-12-02 14:55:20.153-05');
INSERT INTO public.pinyin_syllables VALUES (45, 17, 'tiě', '铁', 3, 0, '2025-12-02 14:55:20.154-05', '2025-12-02 14:55:20.154-05');
INSERT INTO public.pinyin_syllables VALUES (46, 17, 'cí', '磁', 2, 1, '2025-12-02 14:55:20.155-05', '2025-12-02 14:55:20.155-05');
INSERT INTO public.pinyin_syllables VALUES (47, 18, 'dòu', '逗', 4, 0, '2025-12-02 14:55:20.156-05', '2025-12-02 14:55:20.156-05');
INSERT INTO public.pinyin_syllables VALUES (48, 18, 'mèn', '闷', 4, 1, '2025-12-02 14:55:20.156-05', '2025-12-02 14:55:20.156-05');
INSERT INTO public.pinyin_syllables VALUES (49, 18, 'zi', '子', 0, 2, '2025-12-02 14:55:20.157-05', '2025-12-02 14:55:20.157-05');
INSERT INTO public.pinyin_syllables VALUES (50, 19, 'dà', '大', 4, 0, '2025-12-02 14:55:20.158-05', '2025-12-02 14:55:20.158-05');
INSERT INTO public.pinyin_syllables VALUES (51, 19, 'ná', '拿', 2, 1, '2025-12-02 14:55:20.158-05', '2025-12-02 14:55:20.158-05');
INSERT INTO public.pinyin_syllables VALUES (52, 20, 'der', 'd', 0, 0, '2025-12-02 14:55:20.159-05', '2025-12-02 14:55:20.159-05');
INSERT INTO public.pinyin_syllables VALUES (53, 20, 'der', 'e', 0, 1, '2025-12-02 14:55:20.16-05', '2025-12-02 14:55:20.16-05');
INSERT INTO public.pinyin_syllables VALUES (54, 20, 'der', 'r', 0, 2, '2025-12-02 14:55:20.16-05', '2025-12-02 14:55:20.16-05');
INSERT INTO public.pinyin_syllables VALUES (55, 21, 'ma', '嘛', 0, 0, '2025-12-02 14:55:20.161-05', '2025-12-02 14:55:20.161-05');
INSERT INTO public.pinyin_syllables VALUES (56, 21, 'ne', '呢', 0, 1, '2025-12-02 14:55:20.162-05', '2025-12-02 14:55:20.162-05');
INSERT INTO public.pinyin_syllables VALUES (57, 22, 'láo', '劳', 2, 0, '2025-12-02 14:55:20.163-05', '2025-12-02 14:55:20.163-05');
INSERT INTO public.pinyin_syllables VALUES (58, 22, 'jià', '驾', 4, 1, '2025-12-02 14:55:20.163-05', '2025-12-02 14:55:20.163-05');
INSERT INTO public.pinyin_syllables VALUES (59, 23, 'xiē', '歇', 1, 0, '2025-12-02 14:55:20.164-05', '2025-12-02 14:55:20.164-05');
INSERT INTO public.pinyin_syllables VALUES (60, 23, 'cài', '菜', 4, 1, '2025-12-02 14:55:20.165-05', '2025-12-02 14:55:20.165-05');
INSERT INTO public.pinyin_syllables VALUES (61, 24, 'dé', '得', 2, 0, '2025-12-02 14:55:20.166-05', '2025-12-02 14:55:20.166-05');
INSERT INTO public.pinyin_syllables VALUES (62, 25, 'āi', '哎', 1, 0, '2025-12-02 14:55:20.167-05', '2025-12-02 14:55:20.167-05');
INSERT INTO public.pinyin_syllables VALUES (63, 25, 'yōu', '呦', 1, 1, '2025-12-02 14:55:20.167-05', '2025-12-02 14:55:20.167-05');
INSERT INTO public.pinyin_syllables VALUES (64, 25, 'wèi', '喂', 4, 2, '2025-12-02 14:55:20.167-05', '2025-12-02 14:55:20.167-05');
INSERT INTO public.pinyin_syllables VALUES (447, 119, 'r', '儿', 0, 1, '2025-12-11 13:36:20.765-05', '2025-12-11 13:36:20.765-05');
INSERT INTO public.pinyin_syllables VALUES (448, 119, 'ge', '个', 0, 2, '2025-12-11 13:36:20.765-05', '2025-12-11 13:36:20.765-05');
INSERT INTO public.pinyin_syllables VALUES (68, 27, 'ber', '倍', 0, 0, '2025-12-02 14:55:20.17-05', '2025-12-02 14:55:20.17-05');
INSERT INTO public.pinyin_syllables VALUES (69, 27, 'ber', '儿', 0, 1, '2025-12-02 14:55:20.17-05', '2025-12-02 14:55:20.17-05');
INSERT INTO public.pinyin_syllables VALUES (71, 29, 'béng', '甭', 2, 0, '2025-12-02 14:55:20.173-05', '2025-12-02 14:55:20.173-05');
INSERT INTO public.pinyin_syllables VALUES (72, 29, 'guǎn', '管', 3, 1, '2025-12-02 14:55:20.173-05', '2025-12-02 14:55:20.173-05');
INSERT INTO public.pinyin_syllables VALUES (73, 30, 'cāo', '糙', 1, 0, '2025-12-02 14:55:20.174-05', '2025-12-02 14:55:20.174-05');
INSERT INTO public.pinyin_syllables VALUES (79, 33, 'cí', '瓷', 2, 0, '2025-12-02 14:55:20.179-05', '2025-12-02 14:55:20.179-05');
INSERT INTO public.pinyin_syllables VALUES (80, 33, 'shi', '实', 0, 1, '2025-12-02 14:55:20.18-05', '2025-12-02 14:55:20.18-05');
INSERT INTO public.pinyin_syllables VALUES (81, 34, 'hán', '寒', 2, 0, '2025-12-02 14:55:20.181-05', '2025-12-02 14:55:20.181-05');
INSERT INTO public.pinyin_syllables VALUES (82, 34, 'chen', '碜', 0, 1, '2025-12-02 14:55:20.181-05', '2025-12-02 14:55:20.181-05');
INSERT INTO public.pinyin_syllables VALUES (83, 35, 'tè', '特', 4, 0, '2025-12-02 14:55:20.182-05', '2025-12-02 14:55:20.182-05');
INSERT INTO public.pinyin_syllables VALUES (84, 35, 'me', '么', 0, 1, '2025-12-02 14:55:20.182-05', '2025-12-02 14:55:20.182-05');
INSERT INTO public.pinyin_syllables VALUES (98, 40, 'gè', '硌', 4, 0, '2025-12-02 14:55:20.192-05', '2025-12-02 14:55:20.192-05');
INSERT INTO public.pinyin_syllables VALUES (99, 40, 'ying', '应', 0, 1, '2025-12-02 14:55:20.192-05', '2025-12-02 14:55:20.192-05');
INSERT INTO public.pinyin_syllables VALUES (100, 41, 'lòu', '露', 4, 0, '2025-12-02 14:55:20.193-05', '2025-12-02 14:55:20.193-05');
INSERT INTO public.pinyin_syllables VALUES (101, 41, 'qiè', '怯', 4, 1, '2025-12-02 14:55:20.194-05', '2025-12-02 14:55:20.194-05');
INSERT INTO public.pinyin_syllables VALUES (102, 42, 'jī', '鸡', 1, 0, '2025-12-02 14:55:20.195-05', '2025-12-02 14:55:20.195-05');
INSERT INTO public.pinyin_syllables VALUES (103, 42, 'zéi', '贼', 2, 1, '2025-12-02 14:55:20.195-05', '2025-12-02 14:55:20.195-05');
INSERT INTO public.pinyin_syllables VALUES (108, 44, 'tǔ', '土', 3, 0, '2025-12-02 14:55:20.198-05', '2025-12-02 14:55:20.198-05');
INSERT INTO public.pinyin_syllables VALUES (109, 44, 'biē', '鳖', 1, 1, '2025-12-02 14:55:20.199-05', '2025-12-02 14:55:20.199-05');
INSERT INTO public.pinyin_syllables VALUES (114, 46, 'cuō', '搓', 1, 0, '2025-12-02 14:55:20.204-05', '2025-12-02 14:55:20.204-05');
INSERT INTO public.pinyin_syllables VALUES (115, 46, 'fàn', '饭', 4, 1, '2025-12-02 14:55:20.204-05', '2025-12-02 14:55:20.204-05');
INSERT INTO public.pinyin_syllables VALUES (429, 112, 'r', '儿', 0, 2, '2025-12-09 21:25:00.921-05', '2025-12-09 21:25:00.921-05');
INSERT INTO public.pinyin_syllables VALUES (438, 116, 'yì', '意', 4, 0, '2025-12-09 22:13:01.244-05', '2025-12-09 22:13:01.244-05');
INSERT INTO public.pinyin_syllables VALUES (439, 116, 'huì', '会', 4, 1, '2025-12-09 22:13:01.244-05', '2025-12-09 22:13:01.244-05');
INSERT INTO public.pinyin_syllables VALUES (440, 116, 'yí', '一', 2, 2, '2025-12-09 22:13:01.244-05', '2025-12-09 22:13:01.244-05');
INSERT INTO public.pinyin_syllables VALUES (441, 116, 'xià', '下', 4, 3, '2025-12-09 22:13:01.244-05', '2025-12-09 22:13:01.244-05');
INSERT INTO public.pinyin_syllables VALUES (428, 112, 'zhī', '汁', 1, 1, '2025-12-09 21:25:00.921-05', '2025-12-09 21:25:00.921-05');
INSERT INTO public.pinyin_syllables VALUES (125, 50, 'béng', '甭', 2, 0, '2025-12-02 14:55:20.21-05', '2025-12-02 14:55:20.21-05');
INSERT INTO public.pinyin_syllables VALUES (126, 50, 'tí', '提', 2, 1, '2025-12-02 14:55:20.211-05', '2025-12-02 14:55:20.211-05');
INSERT INTO public.pinyin_syllables VALUES (127, 50, 'le', '了', 0, 2, '2025-12-02 14:55:20.211-05', '2025-12-02 14:55:20.211-05');
INSERT INTO public.pinyin_syllables VALUES (427, 112, 'dòu', '豆', 4, 0, '2025-12-09 21:25:00.921-05', '2025-12-09 21:25:00.921-05');
INSERT INTO public.pinyin_syllables VALUES (131, 52, 'bā', '扒', 1, 0, '2025-12-02 14:55:20.213-05', '2025-12-02 14:55:20.213-05');
INSERT INTO public.pinyin_syllables VALUES (132, 52, 'la', '拉', 0, 1, '2025-12-02 14:55:20.214-05', '2025-12-02 14:55:20.214-05');
INSERT INTO public.pinyin_syllables VALUES (133, 53, 'sā', '撒', 1, 0, '2025-12-02 14:55:20.215-05', '2025-12-02 14:55:20.215-05');
INSERT INTO public.pinyin_syllables VALUES (134, 53, 'yā', '丫', 1, 1, '2025-12-02 14:55:20.215-05', '2025-12-02 14:55:20.215-05');
INSERT INTO public.pinyin_syllables VALUES (135, 53, 'z', '子', 0, 2, '2025-12-02 14:55:20.216-05', '2025-12-02 14:55:20.216-05');
INSERT INTO public.pinyin_syllables VALUES (136, 54, 'kāi', '开', 1, 0, '2025-12-02 14:55:20.216-05', '2025-12-02 14:55:20.216-05');
INSERT INTO public.pinyin_syllables VALUES (137, 54, 'shuàn', '涮', 4, 1, '2025-12-02 14:55:20.217-05', '2025-12-02 14:55:20.217-05');
INSERT INTO public.pinyin_syllables VALUES (138, 55, 'dǐng', '顶', 3, 0, '2025-12-02 14:55:20.218-05', '2025-12-02 14:55:20.218-05');
INSERT INTO public.pinyin_syllables VALUES (139, 55, 'gāng', '缸', 1, 1, '2025-12-02 14:55:20.218-05', '2025-12-02 14:55:20.218-05');
INSERT INTO public.pinyin_syllables VALUES (140, 56, 'ài', '碍', 4, 0, '2025-12-02 14:55:20.219-05', '2025-12-02 14:55:20.219-05');
INSERT INTO public.pinyin_syllables VALUES (141, 56, 'yǎn', '眼', 3, 1, '2025-12-02 14:55:20.219-05', '2025-12-02 14:55:20.219-05');
INSERT INTO public.pinyin_syllables VALUES (153, 60, 'shuāi', '摔', 1, 0, '2025-12-02 14:55:20.227-05', '2025-12-02 14:55:20.227-05');
INSERT INTO public.pinyin_syllables VALUES (154, 60, 'liē', '咧', 1, 1, '2025-12-02 14:55:20.227-05', '2025-12-02 14:55:20.227-05');
INSERT INTO public.pinyin_syllables VALUES (155, 60, 'zi', '子', 0, 2, '2025-12-02 14:55:20.227-05', '2025-12-02 14:55:20.227-05');
INSERT INTO public.pinyin_syllables VALUES (173, 65, 'qià', '岔', 4, 0, '2025-12-02 14:55:20.237-05', '2025-12-02 14:55:20.237-05');
INSERT INTO public.pinyin_syllables VALUES (174, 65, 'jià', '架', 4, 1, '2025-12-02 14:55:20.238-05', '2025-12-02 14:55:20.238-05');
INSERT INTO public.pinyin_syllables VALUES (175, 66, 'niār', '蔫', 1, 0, '2025-12-02 14:55:20.238-05', '2025-12-02 14:55:20.238-05');
INSERT INTO public.pinyin_syllables VALUES (182, 69, 'lē', '邋', 1, 0, '2025-12-02 14:55:20.242-05', '2025-12-02 14:55:20.242-05');
INSERT INTO public.pinyin_syllables VALUES (183, 69, 'lǐ', '里', 3, 1, '2025-12-02 14:55:20.243-05', '2025-12-02 14:55:20.243-05');
INSERT INTO public.pinyin_syllables VALUES (184, 69, 'lē', '邋', 1, 2, '2025-12-02 14:55:20.243-05', '2025-12-02 14:55:20.243-05');
INSERT INTO public.pinyin_syllables VALUES (185, 69, 'tē', '遢', 1, 3, '2025-12-02 14:55:20.243-05', '2025-12-02 14:55:20.243-05');
INSERT INTO public.pinyin_syllables VALUES (186, 70, 'tān', '怹', 1, 0, '2025-12-02 14:55:20.244-05', '2025-12-02 14:55:20.244-05');
INSERT INTO public.pinyin_syllables VALUES (187, 70, 'mèn', '们', 4, 1, '2025-12-02 14:55:20.244-05', '2025-12-02 14:55:20.244-05');
INSERT INTO public.pinyin_syllables VALUES (188, 71, 'mā', '摩', 1, 0, '2025-12-02 14:55:20.246-05', '2025-12-02 14:55:20.246-05');
INSERT INTO public.pinyin_syllables VALUES (189, 71, 'soù', '挲', 4, 1, '2025-12-02 14:55:20.246-05', '2025-12-02 14:55:20.246-05');
INSERT INTO public.pinyin_syllables VALUES (197, 74, 'fǎn', '反', 3, 0, '2025-12-02 14:55:20.251-05', '2025-12-02 14:55:20.251-05');
INSERT INTO public.pinyin_syllables VALUES (198, 74, 'tān', '摊', 1, 1, '2025-12-02 14:55:20.251-05', '2025-12-02 14:55:20.251-05');
INSERT INTO public.pinyin_syllables VALUES (199, 74, 'zi', '子', 0, 2, '2025-12-02 14:55:20.251-05', '2025-12-02 14:55:20.251-05');
INSERT INTO public.pinyin_syllables VALUES (200, 74, 'le', '了', 0, 3, '2025-12-02 14:55:20.251-05', '2025-12-02 14:55:20.251-05');
INSERT INTO public.pinyin_syllables VALUES (201, 75, 'bù', '不', 4, 0, '2025-12-02 14:55:20.252-05', '2025-12-02 14:55:20.252-05');
INSERT INTO public.pinyin_syllables VALUES (202, 75, 'zháo', '着', 2, 1, '2025-12-02 14:55:20.252-05', '2025-12-02 14:55:20.252-05');
INSERT INTO public.pinyin_syllables VALUES (203, 75, 'diào', '调', 4, 2, '2025-12-02 14:55:20.253-05', '2025-12-02 14:55:20.253-05');
INSERT INTO public.pinyin_syllables VALUES (204, 76, 'dǎ', '打', 3, 0, '2025-12-02 14:55:20.253-05', '2025-12-02 14:55:20.253-05');
INSERT INTO public.pinyin_syllables VALUES (205, 76, 'chà', '岔', 4, 1, '2025-12-02 14:55:20.254-05', '2025-12-02 14:55:20.254-05');
INSERT INTO public.pinyin_syllables VALUES (206, 77, 'dà', '大', 4, 0, '2025-12-02 14:55:20.255-05', '2025-12-02 14:55:20.255-05');
INSERT INTO public.pinyin_syllables VALUES (207, 77, 'bī', '逼', 1, 1, '2025-12-02 14:55:20.255-05', '2025-12-02 14:55:20.255-05');
INSERT INTO public.pinyin_syllables VALUES (208, 77, 'dòu', '斗', 4, 2, '2025-12-02 14:55:20.255-05', '2025-12-02 14:55:20.255-05');
INSERT INTO public.pinyin_syllables VALUES (209, 78, 'dóu', '抖', 2, 0, '2025-12-02 14:55:20.256-05', '2025-12-02 14:55:20.256-05');
INSERT INTO public.pinyin_syllables VALUES (210, 78, 'bà', '吧', 4, 1, '2025-12-02 14:55:20.256-05', '2025-12-02 14:55:20.256-05');
INSERT INTO public.pinyin_syllables VALUES (211, 79, 'dè', '得', 4, 0, '2025-12-02 14:55:20.257-05', '2025-12-02 14:55:20.257-05');
INSERT INTO public.pinyin_syllables VALUES (212, 79, 'se', '瑟', 0, 1, '2025-12-02 14:55:20.257-05', '2025-12-02 14:55:20.257-05');
INSERT INTO public.pinyin_syllables VALUES (213, 80, 'mò', '末', 4, 0, '2025-12-02 14:55:20.258-05', '2025-12-02 14:55:20.258-05');
INSERT INTO public.pinyin_syllables VALUES (214, 80, 'liǎo', '了', 3, 1, '2025-12-02 14:55:20.258-05', '2025-12-02 14:55:20.258-05');
INSERT INTO public.pinyin_syllables VALUES (215, 80, 'r', '儿', 0, 2, '2025-12-02 14:55:20.258-05', '2025-12-02 14:55:20.258-05');
INSERT INTO public.pinyin_syllables VALUES (216, 81, 'hún', '浑', 2, 0, '2025-12-02 14:55:20.259-05', '2025-12-02 14:55:20.259-05');
INSERT INTO public.pinyin_syllables VALUES (217, 81, 'bú', '不', 2, 1, '2025-12-02 14:55:20.259-05', '2025-12-02 14:55:20.259-05');
INSERT INTO public.pinyin_syllables VALUES (218, 81, 'lìn', '吝', 4, 2, '2025-12-02 14:55:20.259-05', '2025-12-02 14:55:20.259-05');
INSERT INTO public.pinyin_syllables VALUES (219, 82, 'tū', '秃', 1, 0, '2025-12-02 14:55:20.26-05', '2025-12-02 14:55:20.26-05');
INSERT INTO public.pinyin_syllables VALUES (220, 82, 'lu', '噜', 0, 1, '2025-12-02 14:55:20.26-05', '2025-12-02 14:55:20.26-05');
INSERT INTO public.pinyin_syllables VALUES (221, 82, 'zuǐ', '嘴', 3, 2, '2025-12-02 14:55:20.261-05', '2025-12-02 14:55:20.261-05');
INSERT INTO public.pinyin_syllables VALUES (222, 82, 'le', '了', 0, 3, '2025-12-02 14:55:20.261-05', '2025-12-02 14:55:20.261-05');
INSERT INTO public.pinyin_syllables VALUES (228, 84, 'sun', '孙', 1, 0, '2025-12-02 14:55:20.264-05', '2025-12-02 14:55:20.264-05');
INSERT INTO public.pinyin_syllables VALUES (431, 113, 'r', '儿', 0, 1, '2025-12-09 21:36:45.078-05', '2025-12-09 21:36:45.078-05');
INSERT INTO public.pinyin_syllables VALUES (442, 117, 'ná', '拿', 2, 0, '2025-12-09 22:24:38.557-05', '2025-12-09 22:24:38.557-05');
INSERT INTO public.pinyin_syllables VALUES (229, 84, 'za/zei', '子', 0, 1, '2025-12-02 14:55:20.264-05', '2025-12-02 14:55:20.264-05');
INSERT INTO public.pinyin_syllables VALUES (230, 85, 'ger', '阁', 0, 0, '2025-12-02 14:55:20.266-05', '2025-12-02 14:55:20.266-05');
INSERT INTO public.pinyin_syllables VALUES (231, 85, 'ger', '儿', 0, 1, '2025-12-02 14:55:20.266-05', '2025-12-02 14:55:20.266-05');
INSERT INTO public.pinyin_syllables VALUES (232, 86, 'lǎo', '老', 3, 0, '2025-12-02 14:55:20.267-05', '2025-12-02 14:55:20.267-05');
INSERT INTO public.pinyin_syllables VALUES (233, 86, 'pào', '炮', 4, 1, '2025-12-02 14:55:20.267-05', '2025-12-02 14:55:20.267-05');
INSERT INTO public.pinyin_syllables VALUES (234, 86, 'er', '儿', 0, 2, '2025-12-02 14:55:20.267-05', '2025-12-02 14:55:20.267-05');
INSERT INTO public.pinyin_syllables VALUES (235, 87, 'guǒ', '果', 3, 0, '2025-12-02 14:55:20.268-05', '2025-12-02 14:55:20.268-05');
INSERT INTO public.pinyin_syllables VALUES (236, 87, 'er', '儿', 0, 1, '2025-12-02 14:55:20.268-05', '2025-12-02 14:55:20.268-05');
INSERT INTO public.pinyin_syllables VALUES (237, 88, 'pāi', '拍', 1, 0, '2025-12-02 14:55:20.269-05', '2025-12-02 14:55:20.269-05');
INSERT INTO public.pinyin_syllables VALUES (238, 88, 'pó', '婆', 2, 1, '2025-12-02 14:55:20.269-05', '2025-12-02 14:55:20.269-05');
INSERT INTO public.pinyin_syllables VALUES (239, 88, 'zi', '子', 0, 2, '2025-12-02 14:55:20.269-05', '2025-12-02 14:55:20.269-05');
INSERT INTO public.pinyin_syllables VALUES (240, 89, 'hú', '胡', 2, 0, '2025-12-02 14:55:20.27-05', '2025-12-02 14:55:20.27-05');
INSERT INTO public.pinyin_syllables VALUES (241, 89, 'tòng', '同', 4, 1, '2025-12-02 14:55:20.27-05', '2025-12-02 14:55:20.27-05');
INSERT INTO public.pinyin_syllables VALUES (242, 89, 'chuàn', '串', 4, 2, '2025-12-02 14:55:20.27-05', '2025-12-02 14:55:20.27-05');
INSERT INTO public.pinyin_syllables VALUES (243, 89, 'zi', '子', 0, 3, '2025-12-02 14:55:20.271-05', '2025-12-02 14:55:20.271-05');
INSERT INTO public.pinyin_syllables VALUES (443, 117, 'yàng', '样', 4, 1, '2025-12-09 22:24:38.557-05', '2025-12-09 22:24:38.557-05');
INSERT INTO public.pinyin_syllables VALUES (444, 117, 'r', '儿', 0, 2, '2025-12-09 22:24:38.557-05', '2025-12-09 22:24:38.557-05');
INSERT INTO public.pinyin_syllables VALUES (430, 113, 'bè', '倍', 4, 0, '2025-12-09 21:36:45.078-05', '2025-12-09 21:36:45.078-05');
INSERT INTO public.pinyin_syllables VALUES (252, 92, 'bā', '巴', 1, 0, '2025-12-02 14:55:20.274-05', '2025-12-02 14:55:20.274-05');
INSERT INTO public.pinyin_syllables VALUES (253, 92, 'bù', '不', 4, 1, '2025-12-02 14:55:20.274-05', '2025-12-02 14:55:20.274-05');
INSERT INTO public.pinyin_syllables VALUES (254, 92, 'néng', '能', 2, 2, '2025-12-02 14:55:20.275-05', '2025-12-02 14:55:20.275-05');
INSERT INTO public.pinyin_syllables VALUES (255, 92, 'gòu', '够', 4, 3, '2025-12-02 14:55:20.275-05', '2025-12-02 14:55:20.275-05');
INSERT INTO public.pinyin_syllables VALUES (330, 38, 'zhī', '汁', 1, 1, '2025-12-02 15:22:50.638-05', '2025-12-02 15:22:50.638-05');
INSERT INTO public.pinyin_syllables VALUES (329, 38, 'dòu', '豆', 4, 0, '2025-12-02 15:22:50.638-05', '2025-12-02 15:22:50.638-05');
INSERT INTO public.pinyin_syllables VALUES (263, 95, 'bú', '不', 2, 0, '2025-12-02 14:55:20.279-05', '2025-12-02 14:55:20.279-05');
INSERT INTO public.pinyin_syllables VALUES (264, 95, 'lìn', '吝', 4, 1, '2025-12-02 14:55:20.279-05', '2025-12-02 14:55:20.279-05');
INSERT INTO public.pinyin_syllables VALUES (265, 96, 'chà', '岔', 4, 0, '2025-12-02 14:55:20.28-05', '2025-12-02 14:55:20.28-05');
INSERT INTO public.pinyin_syllables VALUES (266, 96, 'pī', '劈', 1, 1, '2025-12-02 14:55:20.28-05', '2025-12-02 14:55:20.28-05');
INSERT INTO public.pinyin_syllables VALUES (267, 97, 'chī', '吃', 1, 0, '2025-12-02 14:55:20.281-05', '2025-12-02 14:55:20.281-05');
INSERT INTO public.pinyin_syllables VALUES (268, 97, 'guā', '瓜', 1, 1, '2025-12-02 14:55:20.281-05', '2025-12-02 14:55:20.281-05');
INSERT INTO public.pinyin_syllables VALUES (269, 97, 'lào', '落', 4, 2, '2025-12-02 14:55:20.281-05', '2025-12-02 14:55:20.281-05');
INSERT INTO public.pinyin_syllables VALUES (273, 99, 'diān', '颠', 1, 0, '2025-12-02 14:55:20.284-05', '2025-12-02 14:55:20.284-05');
INSERT INTO public.pinyin_syllables VALUES (274, 99, 'r', '儿', 0, 1, '2025-12-02 14:55:20.284-05', '2025-12-02 14:55:20.284-05');
INSERT INTO public.pinyin_syllables VALUES (275, 99, 'le', '了', 0, 2, '2025-12-02 14:55:20.284-05', '2025-12-02 14:55:20.284-05');
INSERT INTO public.pinyin_syllables VALUES (276, 100, 'áo', '熬', 2, 0, '2025-12-02 14:55:20.285-05', '2025-12-02 14:55:20.285-05');
INSERT INTO public.pinyin_syllables VALUES (277, 100, 'yīng', '鹰', 1, 1, '2025-12-02 14:55:20.285-05', '2025-12-02 14:55:20.285-05');
INSERT INTO public.pinyin_syllables VALUES (278, 101, 'jú', '局', 2, 0, '2025-12-02 14:55:20.286-05', '2025-12-02 14:55:20.286-05');
INSERT INTO public.pinyin_syllables VALUES (279, 101, 'qì', '气', 4, 1, '2025-12-02 14:55:20.286-05', '2025-12-02 14:55:20.286-05');
INSERT INTO public.pinyin_syllables VALUES (280, 102, 'sā', '撒', 1, 0, '2025-12-02 14:55:20.287-05', '2025-12-02 14:55:20.287-05');
INSERT INTO public.pinyin_syllables VALUES (281, 102, 'yī', '癔', 1, 1, '2025-12-02 14:55:20.287-05', '2025-12-02 14:55:20.287-05');
INSERT INTO public.pinyin_syllables VALUES (282, 102, 'zhèng', '症', 4, 2, '2025-12-02 14:55:20.287-05', '2025-12-02 14:55:20.287-05');
INSERT INTO public.pinyin_syllables VALUES (283, 103, 'gè', '硌', 4, 0, '2025-12-02 14:55:20.288-05', '2025-12-02 14:55:20.288-05');
INSERT INTO public.pinyin_syllables VALUES (284, 103, 'yìng', '硬', 4, 1, '2025-12-02 14:55:20.288-05', '2025-12-02 14:55:20.288-05');
INSERT INTO public.pinyin_syllables VALUES (291, 106, 'xiāo', '消', 1, 0, '2025-12-02 14:55:20.292-05', '2025-12-02 14:55:20.292-05');
INSERT INTO public.pinyin_syllables VALUES (292, 106, 'ting', '停', 0, 1, '2025-12-02 14:55:20.292-05', '2025-12-02 14:55:20.292-05');
INSERT INTO public.pinyin_syllables VALUES (293, 107, 'dǎ', '打', 3, 0, '2025-12-02 14:55:20.293-05', '2025-12-02 14:55:20.293-05');
INSERT INTO public.pinyin_syllables VALUES (294, 107, 'yǎn', '眼', 3, 1, '2025-12-02 14:55:20.293-05', '2025-12-02 14:55:20.293-05');
INSERT INTO public.pinyin_syllables VALUES (295, 108, 'dǒu', '抖', 3, 0, '2025-12-02 14:55:20.294-05', '2025-12-02 14:55:20.294-05');
INSERT INTO public.pinyin_syllables VALUES (296, 108, 'jī', '机', 1, 1, '2025-12-02 14:55:20.294-05', '2025-12-02 14:55:20.294-05');
INSERT INTO public.pinyin_syllables VALUES (297, 108, 'ling', '灵', 0, 2, '2025-12-02 14:55:20.294-05', '2025-12-02 14:55:20.294-05');
INSERT INTO public.pinyin_syllables VALUES (298, 109, 'niàn', '念', 4, 0, '2025-12-02 14:55:20.295-05', '2025-12-02 14:55:20.295-05');
INSERT INTO public.pinyin_syllables VALUES (299, 109, 'yāng', '秧', 1, 1, '2025-12-02 14:55:20.295-05', '2025-12-02 14:55:20.295-05');
INSERT INTO public.pinyin_syllables VALUES (306, 9, 'nín', '您', 2, 0, '2025-12-02 15:22:50.612-05', '2025-12-02 15:22:50.612-05');
INSERT INTO public.pinyin_syllables VALUES (307, 9, 'gé', '搁', 2, 1, '2025-12-02 15:22:50.615-05', '2025-12-02 15:22:50.615-05');
INSERT INTO public.pinyin_syllables VALUES (308, 9, 'nǎ', '哪', 3, 2, '2025-12-02 15:22:50.616-05', '2025-12-02 15:22:50.616-05');
INSERT INTO public.pinyin_syllables VALUES (309, 9, 'r', '儿', 0, 3, '2025-12-02 15:22:50.617-05', '2025-12-02 15:22:50.617-05');
INSERT INTO public.pinyin_syllables VALUES (310, 9, 'ne', '呢', 0, 4, '2025-12-02 15:22:50.618-05', '2025-12-02 15:22:50.618-05');
INSERT INTO public.pinyin_syllables VALUES (311, 12, 'má', '麻', 2, 0, '2025-12-02 15:22:50.621-05', '2025-12-02 15:22:50.621-05');
INSERT INTO public.pinyin_syllables VALUES (312, 12, 'liū', '溜', 1, 1, '2025-12-02 15:22:50.621-05', '2025-12-02 15:22:50.621-05');
INSERT INTO public.pinyin_syllables VALUES (313, 12, 'r', '儿', 0, 2, '2025-12-02 15:22:50.622-05', '2025-12-02 15:22:50.622-05');
INSERT INTO public.pinyin_syllables VALUES (314, 12, 'de', '地', 0, 3, '2025-12-02 15:22:50.622-05', '2025-12-02 15:22:50.622-05');
INSERT INTO public.pinyin_syllables VALUES (315, 26, 'tē', '忒', 1, 0, '2025-12-02 15:22:50.624-05', '2025-12-02 15:22:50.624-05');
INSERT INTO public.pinyin_syllables VALUES (316, 26, 'r', '儿', 0, 1, '2025-12-02 15:22:50.624-05', '2025-12-02 15:22:50.624-05');
INSERT INTO public.pinyin_syllables VALUES (317, 26, 'lóu', '喽', 2, 2, '2025-12-02 15:22:50.625-05', '2025-12-02 15:22:50.625-05');
INSERT INTO public.pinyin_syllables VALUES (318, 28, 'tēi', '忒', 1, 0, '2025-12-02 15:22:50.626-05', '2025-12-02 15:22:50.626-05');
INSERT INTO public.pinyin_syllables VALUES (319, 32, 'wá', '玩', 2, 0, '2025-12-02 15:22:50.628-05', '2025-12-02 15:22:50.628-05');
INSERT INTO public.pinyin_syllables VALUES (320, 32, 'r', '儿', 0, 1, '2025-12-02 15:22:50.628-05', '2025-12-02 15:22:50.628-05');
INSERT INTO public.pinyin_syllables VALUES (321, 32, 'mìng', '命', 4, 2, '2025-12-02 15:22:50.628-05', '2025-12-02 15:22:50.628-05');
INSERT INTO public.pinyin_syllables VALUES (322, 36, 'jiào', '较', 4, 0, '2025-12-02 15:22:50.63-05', '2025-12-02 15:22:50.63-05');
INSERT INTO public.pinyin_syllables VALUES (323, 36, 'jìn', '劲', 4, 1, '2025-12-02 15:22:50.63-05', '2025-12-02 15:22:50.63-05');
INSERT INTO public.pinyin_syllables VALUES (324, 36, 'r', '儿', 0, 2, '2025-12-02 15:22:50.631-05', '2025-12-02 15:22:50.631-05');
INSERT INTO public.pinyin_syllables VALUES (325, 37, 'gē', '搁', 1, 0, '2025-12-02 15:22:50.633-05', '2025-12-02 15:22:50.633-05');
INSERT INTO public.pinyin_syllables VALUES (326, 37, 'nà', '那', 4, 1, '2025-12-02 15:22:50.634-05', '2025-12-02 15:22:50.634-05');
INSERT INTO public.pinyin_syllables VALUES (327, 37, 'r', '儿', 0, 2, '2025-12-02 15:22:50.634-05', '2025-12-02 15:22:50.634-05');
INSERT INTO public.pinyin_syllables VALUES (328, 37, 'ne', '呢', 0, 3, '2025-12-02 15:22:50.635-05', '2025-12-02 15:22:50.635-05');
INSERT INTO public.pinyin_syllables VALUES (331, 38, 'r', '儿', 0, 2, '2025-12-02 15:22:50.639-05', '2025-12-02 15:22:50.639-05');
INSERT INTO public.pinyin_syllables VALUES (332, 39, 'lǎo', '老', 3, 0, '2025-12-02 15:22:50.641-05', '2025-12-02 15:22:50.641-05');
INSERT INTO public.pinyin_syllables VALUES (333, 39, 'jiā', '家', 1, 1, '2025-12-02 15:22:50.641-05', '2025-12-02 15:22:50.641-05');
INSERT INTO public.pinyin_syllables VALUES (334, 39, 'r', '儿', 0, 2, '2025-12-02 15:22:50.642-05', '2025-12-02 15:22:50.642-05');
INSERT INTO public.pinyin_syllables VALUES (335, 43, 'má', '麻', 2, 0, '2025-12-02 15:22:50.643-05', '2025-12-02 15:22:50.643-05');
INSERT INTO public.pinyin_syllables VALUES (336, 43, 'lī', '利', 1, 1, '2025-12-02 15:22:50.644-05', '2025-12-02 15:22:50.644-05');
INSERT INTO public.pinyin_syllables VALUES (337, 43, 'r', '儿', 0, 2, '2025-12-02 15:22:50.644-05', '2025-12-02 15:22:50.644-05');
INSERT INTO public.pinyin_syllables VALUES (338, 43, 'de', '的', 0, 3, '2025-12-02 15:22:50.645-05', '2025-12-02 15:22:50.645-05');
INSERT INTO public.pinyin_syllables VALUES (339, 45, 'yǎn', '眼', 3, 0, '2025-12-02 15:22:50.646-05', '2025-12-02 15:22:50.646-05');
INSERT INTO public.pinyin_syllables VALUES (340, 45, 'mù', '目', 4, 1, '2025-12-02 15:22:50.646-05', '2025-12-02 15:22:50.646-05');
INSERT INTO public.pinyin_syllables VALUES (341, 45, 'qián', '前', 2, 2, '2025-12-02 15:22:50.647-05', '2025-12-02 15:22:50.647-05');
INSERT INTO public.pinyin_syllables VALUES (342, 45, 'r', '儿', 0, 3, '2025-12-02 15:22:50.647-05', '2025-12-02 15:22:50.647-05');
INSERT INTO public.pinyin_syllables VALUES (343, 47, 'jiě', '姐', 3, 0, '2025-12-02 15:22:50.649-05', '2025-12-02 15:22:50.649-05');
INSERT INTO public.pinyin_syllables VALUES (344, 47, 'men', '们', 0, 1, '2025-12-02 15:22:50.649-05', '2025-12-02 15:22:50.649-05');
INSERT INTO public.pinyin_syllables VALUES (345, 47, 'r', '儿', 0, 2, '2025-12-02 15:22:50.649-05', '2025-12-02 15:22:50.649-05');
INSERT INTO public.pinyin_syllables VALUES (346, 48, 'kōu', '抠', 1, 0, '2025-12-02 15:22:50.651-05', '2025-12-02 15:22:50.651-05');
INSERT INTO public.pinyin_syllables VALUES (347, 48, 'mén', '门', 2, 1, '2025-12-02 15:22:50.651-05', '2025-12-02 15:22:50.651-05');
INSERT INTO public.pinyin_syllables VALUES (348, 48, 'r', '儿', 0, 2, '2025-12-02 15:22:50.652-05', '2025-12-02 15:22:50.652-05');
INSERT INTO public.pinyin_syllables VALUES (349, 49, 'niān', '蔫', 1, 0, '2025-12-02 15:22:50.653-05', '2025-12-02 15:22:50.653-05');
INSERT INTO public.pinyin_syllables VALUES (350, 49, 'r', '儿', 0, 1, '2025-12-02 15:22:50.653-05', '2025-12-02 15:22:50.653-05');
INSERT INTO public.pinyin_syllables VALUES (351, 49, 'huài', '坏', 4, 2, '2025-12-02 15:22:50.654-05', '2025-12-02 15:22:50.654-05');
INSERT INTO public.pinyin_syllables VALUES (352, 51, 'dì', '地', 4, 0, '2025-12-02 15:22:50.655-05', '2025-12-02 15:22:50.655-05');
INSERT INTO public.pinyin_syllables VALUES (353, 51, 'jiè', '界', 4, 1, '2025-12-02 15:22:50.656-05', '2025-12-02 15:22:50.656-05');
INSERT INTO public.pinyin_syllables VALUES (354, 51, 'r', '儿', 0, 2, '2025-12-02 15:22:50.656-05', '2025-12-02 15:22:50.656-05');
INSERT INTO public.pinyin_syllables VALUES (355, 57, 'cí', '瓷', 2, 0, '2025-12-02 15:22:50.658-05', '2025-12-02 15:22:50.658-05');
INSERT INTO public.pinyin_syllables VALUES (356, 57, 'qì', '器', 4, 1, '2025-12-02 15:22:50.658-05', '2025-12-02 15:22:50.658-05');
INSERT INTO public.pinyin_syllables VALUES (358, 58, 'yǒu', '有', 3, 0, '2025-12-02 15:22:50.66-05', '2025-12-02 15:22:50.66-05');
INSERT INTO public.pinyin_syllables VALUES (359, 58, 'yàng', '样', 4, 1, '2025-12-02 15:22:50.661-05', '2025-12-02 15:22:50.661-05');
INSERT INTO public.pinyin_syllables VALUES (360, 58, 'r', '儿', 0, 2, '2025-12-02 15:22:50.661-05', '2025-12-02 15:22:50.661-05');
INSERT INTO public.pinyin_syllables VALUES (362, 59, 'ná', '拿', 2, 0, '2025-12-02 15:22:50.663-05', '2025-12-02 15:22:50.663-05');
INSERT INTO public.pinyin_syllables VALUES (363, 59, 'yàng', '样', 4, 1, '2025-12-02 15:22:50.663-05', '2025-12-02 15:22:50.663-05');
INSERT INTO public.pinyin_syllables VALUES (364, 59, 'r', '儿', 0, 2, '2025-12-02 15:22:50.663-05', '2025-12-02 15:22:50.663-05');
INSERT INTO public.pinyin_syllables VALUES (366, 61, 'zì', '自', 4, 0, '2025-12-02 15:22:50.665-05', '2025-12-02 15:22:50.665-05');
INSERT INTO public.pinyin_syllables VALUES (367, 61, 'gě', '个', 3, 1, '2025-12-02 15:22:50.665-05', '2025-12-02 15:22:50.665-05');
INSERT INTO public.pinyin_syllables VALUES (368, 61, 'r', '儿', 0, 2, '2025-12-02 15:22:50.666-05', '2025-12-02 15:22:50.666-05');
INSERT INTO public.pinyin_syllables VALUES (370, 62, 'shú', '熟', 2, 0, '2025-12-02 15:22:50.667-05', '2025-12-02 15:22:50.667-05');
INSERT INTO public.pinyin_syllables VALUES (371, 62, 'zhāng', '张', 1, 1, '2025-12-02 15:22:50.668-05', '2025-12-02 15:22:50.668-05');
INSERT INTO public.pinyin_syllables VALUES (372, 62, 'r', '儿', 0, 2, '2025-12-02 15:22:50.668-05', '2025-12-02 15:22:50.668-05');
INSERT INTO public.pinyin_syllables VALUES (374, 63, 'yìng', '硬', 4, 0, '2025-12-02 15:22:50.67-05', '2025-12-02 15:22:50.67-05');
INSERT INTO public.pinyin_syllables VALUES (375, 63, 'chá', '茬', 2, 1, '2025-12-02 15:22:50.67-05', '2025-12-02 15:22:50.67-05');
INSERT INTO public.pinyin_syllables VALUES (376, 63, 'r', '儿', 0, 2, '2025-12-02 15:22:50.671-05', '2025-12-02 15:22:50.671-05');
INSERT INTO public.pinyin_syllables VALUES (378, 64, 'yì', '意', 4, 0, '2025-12-02 15:22:50.672-05', '2025-12-02 15:22:50.672-05');
INSERT INTO public.pinyin_syllables VALUES (379, 64, 'huì', '会', 4, 1, '2025-12-02 15:22:50.673-05', '2025-12-02 15:22:50.673-05');
INSERT INTO public.pinyin_syllables VALUES (380, 64, 'yí', '一', 2, 2, '2025-12-02 15:22:50.673-05', '2025-12-02 15:22:50.673-05');
INSERT INTO public.pinyin_syllables VALUES (381, 64, 'xià', '下', 4, 3, '2025-12-02 15:22:50.673-05', '2025-12-02 15:22:50.673-05');
INSERT INTO public.pinyin_syllables VALUES (383, 67, 'cī', '呲', 1, 0, '2025-12-02 15:22:50.675-05', '2025-12-02 15:22:50.675-05');
INSERT INTO public.pinyin_syllables VALUES (384, 67, 'r', '儿', 0, 1, '2025-12-02 15:22:50.675-05', '2025-12-02 15:22:50.675-05');
INSERT INTO public.pinyin_syllables VALUES (385, 67, 'lou', '喽', 0, 2, '2025-12-02 15:22:50.675-05', '2025-12-02 15:22:50.675-05');
INSERT INTO public.pinyin_syllables VALUES (386, 68, 'āi', '挨', 1, 0, '2025-12-02 15:22:50.677-05', '2025-12-02 15:22:50.677-05');
INSERT INTO public.pinyin_syllables VALUES (387, 68, 'cī', '呲', 1, 1, '2025-12-02 15:22:50.677-05', '2025-12-02 15:22:50.677-05');
INSERT INTO public.pinyin_syllables VALUES (388, 68, 'r', '儿', 0, 2, '2025-12-02 15:22:50.677-05', '2025-12-02 15:22:50.677-05');
INSERT INTO public.pinyin_syllables VALUES (389, 72, 'gē', '哥', 1, 0, '2025-12-02 15:22:50.679-05', '2025-12-02 15:22:50.679-05');
INSERT INTO public.pinyin_syllables VALUES (390, 72, 'mè', '们', 4, 1, '2025-12-02 15:22:50.68-05', '2025-12-02 15:22:50.68-05');
INSERT INTO public.pinyin_syllables VALUES (391, 72, 'r', '儿', 0, 2, '2025-12-02 15:22:50.68-05', '2025-12-02 15:22:50.68-05');
INSERT INTO public.pinyin_syllables VALUES (392, 73, 'lī', '哩', 1, 0, '2025-12-02 15:22:50.681-05', '2025-12-02 15:22:50.681-05');
INSERT INTO public.pinyin_syllables VALUES (393, 73, 'gè', '个', 4, 1, '2025-12-02 15:22:50.682-05', '2025-12-02 15:22:50.682-05');
INSERT INTO public.pinyin_syllables VALUES (394, 73, 'r', '儿', 0, 2, '2025-12-02 15:22:50.682-05', '2025-12-02 15:22:50.682-05');
INSERT INTO public.pinyin_syllables VALUES (395, 73, 'lēng', '愣', 1, 3, '2025-12-02 15:22:50.682-05', '2025-12-02 15:22:50.682-05');
INSERT INTO public.pinyin_syllables VALUES (396, 83, 'jī', '今', 1, 0, '2025-12-02 15:22:50.684-05', '2025-12-02 15:22:50.684-05');
INSERT INTO public.pinyin_syllables VALUES (397, 83, 'r', '儿', 0, 1, '2025-12-02 15:22:50.684-05', '2025-12-02 15:22:50.684-05');
INSERT INTO public.pinyin_syllables VALUES (398, 83, 'nǎ', '哪', 3, 2, '2025-12-02 15:22:50.684-05', '2025-12-02 15:22:50.684-05');
INSERT INTO public.pinyin_syllables VALUES (399, 83, 'r', '儿', 0, 3, '2025-12-02 15:22:50.685-05', '2025-12-02 15:22:50.685-05');
INSERT INTO public.pinyin_syllables VALUES (400, 83, 'le', '了', 0, 4, '2025-12-02 15:22:50.685-05', '2025-12-02 15:22:50.685-05');
INSERT INTO public.pinyin_syllables VALUES (401, 91, 'ài', '碍', 4, 0, '2025-12-02 15:22:50.686-05', '2025-12-02 15:22:50.686-05');
INSERT INTO public.pinyin_syllables VALUES (402, 91, 'shì', '事', 4, 1, '2025-12-02 15:22:50.687-05', '2025-12-02 15:22:50.687-05');
INSERT INTO public.pinyin_syllables VALUES (403, 91, 'r', '儿', 0, 2, '2025-12-02 15:22:50.687-05', '2025-12-02 15:22:50.687-05');
INSERT INTO public.pinyin_syllables VALUES (404, 93, 'bá', '拔', 2, 0, '2025-12-02 15:22:50.688-05', '2025-12-02 15:22:50.688-05');
INSERT INTO public.pinyin_syllables VALUES (405, 93, 'fèn', '份', 4, 1, '2025-12-02 15:22:50.688-05', '2025-12-02 15:22:50.688-05');
INSERT INTO public.pinyin_syllables VALUES (406, 93, 'r', '儿', 0, 2, '2025-12-02 15:22:50.689-05', '2025-12-02 15:22:50.689-05');
INSERT INTO public.pinyin_syllables VALUES (407, 94, 'bàn', '半', 4, 0, '2025-12-02 15:22:50.69-05', '2025-12-02 15:22:50.69-05');
INSERT INTO public.pinyin_syllables VALUES (408, 94, 'shú', '熟', 2, 1, '2025-12-02 15:22:50.69-05', '2025-12-02 15:22:50.69-05');
INSERT INTO public.pinyin_syllables VALUES (409, 94, 'liǎn', '脸', 3, 2, '2025-12-02 15:22:50.694-05', '2025-12-02 15:22:50.694-05');
INSERT INTO public.pinyin_syllables VALUES (410, 94, 'r', '儿', 0, 3, '2025-12-02 15:22:50.694-05', '2025-12-02 15:22:50.694-05');
INSERT INTO public.pinyin_syllables VALUES (411, 98, 'dā', '搭', 1, 0, '2025-12-02 15:22:50.696-05', '2025-12-02 15:22:50.696-05');
INSERT INTO public.pinyin_syllables VALUES (412, 98, 'chá', '茬', 2, 1, '2025-12-02 15:22:50.696-05', '2025-12-02 15:22:50.696-05');
INSERT INTO public.pinyin_syllables VALUES (413, 98, 'r', '儿', 0, 2, '2025-12-02 15:22:50.697-05', '2025-12-02 15:22:50.697-05');
INSERT INTO public.pinyin_syllables VALUES (414, 104, 'mén', '门', 2, 0, '2025-12-02 15:22:50.698-05', '2025-12-02 15:22:50.698-05');
INSERT INTO public.pinyin_syllables VALUES (415, 104, 'r', '儿', 0, 1, '2025-12-02 15:22:50.698-05', '2025-12-02 15:22:50.698-05');
INSERT INTO public.pinyin_syllables VALUES (416, 104, 'qīng', '清', 1, 2, '2025-12-02 15:22:50.699-05', '2025-12-02 15:22:50.699-05');
INSERT INTO public.pinyin_syllables VALUES (417, 105, 'jiáo', '嚼', 2, 0, '2025-12-02 15:22:50.7-05', '2025-12-02 15:22:50.7-05');
INSERT INTO public.pinyin_syllables VALUES (418, 105, 'gu', '谷', 0, 1, '2025-12-02 15:22:50.7-05', '2025-12-02 15:22:50.7-05');
INSERT INTO public.pinyin_syllables VALUES (419, 105, 'r', '儿', 0, 2, '2025-12-02 15:22:50.701-05', '2025-12-02 15:22:50.701-05');
INSERT INTO public.pinyin_syllables VALUES (432, 114, 'yoǔ', '有', 3, 0, '2025-12-09 21:48:27.305-05', '2025-12-09 21:48:27.305-05');
INSERT INTO public.pinyin_syllables VALUES (433, 114, 'yàng', '样', 4, 1, '2025-12-09 21:48:27.305-05', '2025-12-09 21:48:27.305-05');
INSERT INTO public.pinyin_syllables VALUES (434, 114, 'r', '儿', 0, 2, '2025-12-09 21:48:27.305-05', '2025-12-09 21:48:27.305-05');
INSERT INTO public.pinyin_syllables VALUES (445, 118, 'nín', '您', 2, 0, '2025-12-11 11:48:22.2-05', '2025-12-11 11:48:22.2-05');


--
-- Data for Name: word_recordings; Type: TABLE DATA; Schema: public; Owner: nicolesun
--

INSERT INTO public.word_recordings VALUES (1, 91, '/uploads/audio/1765670090707-2a7c08b3af53be96.webm', 46744, 'audio/webm', 1, '2025-12-02 14:55:20.273-05', '2025-12-13 18:54:50.717-05');
INSERT INTO public.word_recordings VALUES (2, 94, '/uploads/audio/1765670048412-3dd46b5e005ede3e.webm', 47582, 'audio/webm', 1, '2025-12-02 14:55:20.277-05', '2025-12-13 18:54:08.42-05');
INSERT INTO public.word_recordings VALUES (3, 66, '/uploads/audio/1765423357203-797a73d25ff6bb69.webm', 131150, 'audio/x-wav', 1, '2025-12-02 14:55:20.238-05', '2025-12-10 22:22:37.206-05');
INSERT INTO public.word_recordings VALUES (4, 83, '/uploads/audio/1765423410302-4ef6d451ce1c36e4.webm', 51799, 'audio/webm', 1, '2025-12-02 14:55:20.262-05', '2025-12-10 22:23:30.312-05');
INSERT INTO public.word_recordings VALUES (5, 71, '/uploads/audio/1765408016670-beb6fdc99986ab30.webm', 69032, 'audio/webm', 1, '2025-12-02 14:55:20.245-05', '2025-12-10 18:06:56.681-05');
INSERT INTO public.word_recordings VALUES (6, 98, '/uploads/audio/1765423043877-e6e7f3a6fefeb942.webm', 73642, 'audio/webm', 1, '2025-12-02 14:55:20.282-05', '2025-12-10 22:17:23.879-05');
INSERT INTO public.word_recordings VALUES (7, 79, '/uploads/audio/1765407837725-58018c69676c1f7d.webm', 45739, 'audio/webm', 1, '2025-12-02 14:55:20.256-05', '2025-12-10 18:03:57.73-05');
INSERT INTO public.word_recordings VALUES (8, 70, '/uploads/audio/1765407880844-ba794b644ee4ed12.webm', 37059, 'audio/webm', 1, '2025-12-02 14:55:20.244-05', '2025-12-10 18:04:40.846-05');
INSERT INTO public.word_recordings VALUES (9, 95, '/uploads/audio/1765407932135-dff48d54e9b1e955.webm', 48641, 'audio/webm', 1, '2025-12-02 14:55:20.278-05', '2025-12-10 18:05:32.146-05');
INSERT INTO public.word_recordings VALUES (10, 74, '/uploads/audio/1765421784255-ce9d4d1742768b32.webm', 393294, 'audio/x-wav', 1, '2025-12-02 14:55:20.25-05', '2025-12-10 21:56:24.268-05');
INSERT INTO public.word_recordings VALUES (11, 78, '/uploads/audio/1765422462490-28e4e1a5b9c0ec65.webm', 55751, 'audio/webm', 1, '2025-12-02 14:55:20.255-05', '2025-12-10 22:07:42.499-05');
INSERT INTO public.word_recordings VALUES (12, 97, '/uploads/audio/1765423070896-bda2600413288a2a.webm', 53868, 'audio/webm', 1, '2025-12-02 14:55:20.281-05', '2025-12-10 22:17:50.899-05');
INSERT INTO public.word_recordings VALUES (13, 82, '/uploads/audio/1765423132594-0575cd6c09626937.webm', 524366, 'audio/x-wav', 1, '2025-12-02 14:55:20.26-05', '2025-12-10 22:18:52.602-05');
INSERT INTO public.word_recordings VALUES (14, 68, '/uploads/audio/1765423687608-7de03fce4216eb1e.webm', 44621, 'audio/webm', 1, '2025-12-02 14:55:20.241-05', '2025-12-10 22:28:07.619-05');
INSERT INTO public.word_recordings VALUES (15, 67, '/uploads/audio/1765423723673-222c14b43ca6c373.webm', 55740, 'audio/webm', 1, '2025-12-02 14:55:20.239-05', '2025-12-10 22:28:43.684-05');
INSERT INTO public.word_recordings VALUES (16, 86, '/uploads/audio/1765670218707-aa417ae4175a0589.webm', 46445, 'audio/webm', 1, '2025-12-02 14:55:20.266-05', '2025-12-13 18:56:58.722-05');
INSERT INTO public.word_recordings VALUES (17, 112, '/uploads/audio/1765464021373-38c41a6e60bfdd7b.webm', 69291, 'audio/webm', 1, '2025-12-09 21:25:00.911-05', '2025-12-11 09:40:21.391-05');
INSERT INTO public.word_recordings VALUES (18, 104, '/uploads/audio/1765407891452-ba8ba444b2b511f8.webm', 42221, 'audio/webm', 1, '2025-12-02 14:55:20.289-05', '2025-12-10 18:04:51.455-05');
INSERT INTO public.word_recordings VALUES (19, 118, '/uploads/audio/1765471702174-165275d4bdff6b9b.webm', 58593, 'audio/webm', 1, '2025-12-11 11:48:22.187-05', '2025-12-11 11:48:22.187-05');
INSERT INTO public.word_recordings VALUES (20, 111, '/uploads/audio/1765422863933-b7e62c7aa04ceb2b.webm', 56468, 'audio/webm', 1, '2025-12-08 17:36:09.026-05', '2025-12-10 22:14:23.943-05');
INSERT INTO public.word_recordings VALUES (21, 119, '/uploads/audio/1765478180742-0459f9d3682a1e76.webm', 63039, 'audio/webm', 1, '2025-12-11 13:36:20.758-05', '2025-12-11 13:36:20.758-05');
INSERT INTO public.word_recordings VALUES (22, 107, '/uploads/audio/1765422891853-7b3bf4240b3c9690.webm', 65038, 'audio/webm', 1, '2025-12-02 14:55:20.293-05', '2025-12-10 22:14:51.856-05');
INSERT INTO public.word_recordings VALUES (23, 105, '/uploads/audio/1765422929167-a98cde52027b2592.webm', 45871, 'audio/webm', 1, '2025-12-02 14:55:20.29-05', '2025-12-10 22:15:29.169-05');
INSERT INTO public.word_recordings VALUES (24, 106, '/uploads/audio/1765303268325-9952e50216a59cfc.webm', 39843, 'audio/webm', 1, '2025-12-02 14:55:20.292-05', '2025-12-09 13:01:08.333-05');
INSERT INTO public.word_recordings VALUES (25, 114, '/uploads/audio/1765334907292-1c7c98b57de76010.webm', 55388, 'audio/webm', 1, '2025-12-09 21:48:27.302-05', '2025-12-09 21:48:27.302-05');
INSERT INTO public.word_recordings VALUES (26, 116, '/uploads/audio/1765336381223-bff2ab64d0a28333.webm', 48767, 'audio/webm', 1, '2025-12-09 22:13:01.236-05', '2025-12-09 22:13:01.236-05');
INSERT INTO public.word_recordings VALUES (27, 113, '/uploads/audio/1765334205058-24a1a7a3ee1d3db1.webm', 39962, 'audio/webm', 1, '2025-12-09 21:36:45.074-05', '2025-12-09 21:36:45.074-05');
INSERT INTO public.word_recordings VALUES (28, 109, '/uploads/audio/1765422956986-8c9a41e0cb4cb855.webm', 48281, 'audio/webm', 1, '2025-12-02 14:55:20.294-05', '2025-12-10 22:15:56.988-05');
INSERT INTO public.word_recordings VALUES (29, 100, '/uploads/audio/1765423004764-0050001978187138.webm', 44122, 'audio/webm', 1, '2025-12-02 14:55:20.285-05', '2025-12-10 22:16:44.768-05');
INSERT INTO public.word_recordings VALUES (30, 117, '/uploads/audio/1765423606508-1704fe03795634ea.webm', 131150, 'audio/x-wav', 1, '2025-12-09 22:24:38.548-05', '2025-12-10 22:26:46.52-05');
INSERT INTO public.word_recordings VALUES (31, 115, '/uploads/audio/1765669946395-6ac90e7dfbbcd3e5.webm', 60178, 'audio/webm', 1, '2025-12-09 21:55:24.489-05', '2025-12-13 18:52:26.409-05');
INSERT INTO public.word_recordings VALUES (32, 108, '/uploads/audio/1765669985608-65cc87cdbc1c353c.webm', 51280, 'audio/webm', 1, '2025-12-02 14:55:20.293-05', '2025-12-13 18:53:05.618-05');
INSERT INTO public.word_recordings VALUES (33, 99, '/uploads/audio/1765670014345-ac3d647b1905c01b.webm', 36029, 'audio/webm', 1, '2025-12-02 14:55:20.284-05', '2025-12-13 18:53:34.359-05');


--
-- Name: example_sentences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicolesun
--

SELECT pg_catalog.setval('public.example_sentences_id_seq', 117, true);


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicolesun
--

SELECT pg_catalog.setval('public.photos_id_seq', 1, false);


--
-- Name: pinyin_syllables_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicolesun
--

SELECT pg_catalog.setval('public.pinyin_syllables_id_seq', 448, true);


--
-- Name: word_recordings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicolesun
--

SELECT pg_catalog.setval('public.word_recordings_id_seq', 33, true);


--
-- Name: words_id_seq; Type: SEQUENCE SET; Schema: public; Owner: nicolesun
--

SELECT pg_catalog.setval('public.words_id_seq', 119, true);


--
-- PostgreSQL database dump complete
--

\unrestrict fEZrWMiWDbU9KwX0d743oeXaNEqOI8O5cTRBeOxBWR7np1c6sFjdL7kQLzrHhpK

