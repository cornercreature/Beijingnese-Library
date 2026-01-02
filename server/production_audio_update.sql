--
-- PostgreSQL database dump
--

\restrict Cx12QyjpO5hIzoiU0FrTykN9eniymCnEpUPBTFO7hk41brKhpeqSae4tPNV2d9h

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
INSERT INTO public.words VALUES (94, '半熟脸儿', 'bàn shú liǎnr', 'acquaintance; Someone one knows but not well', '认识但不熟的人', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322339/beijingnese-library/audio/1765670048412-3dd46b5e005ede3e_h8q4br.webm', 47582, 'audio/webm', '2025-12-02 14:55:20.277-05', '2026-01-01 21:52:20.543-05');
INSERT INTO public.words VALUES (66, '蔫', 'niār', 'Weak; unenergized; down', '没精神、低能量、虚弱', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322340/beijingnese-library/audio/1765423357203-797a73d25ff6bb69_brmcif.wav', 131150, 'audio/x-wav', '2025-12-02 14:55:20.238-05', '2026-01-01 21:52:21.788-05');
INSERT INTO public.words VALUES (96, '岔劈', 'chà pī', 'to mistaken; to mess up', '出错、弄混', 'Adjective', NULL, NULL, NULL, '2025-12-02 14:55:20.28-05', '2025-12-02 14:55:20.28-05');
INSERT INTO public.words VALUES (83, '今儿哪儿了', 'jīr nǎr le', 'A colloquial way of asking where someone has been or what they''ve done for the day.', '今天去哪儿了？常用于询问当天行踪', 'Sayings', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322342/beijingnese-library/audio/1765423410302-4ef6d451ce1c36e4_clhkbj.webm', 51799, 'audio/webm', '2025-12-02 14:55:20.262-05', '2026-01-01 21:52:23.15-05');
INSERT INTO public.words VALUES (71, '摩挲', 'mā soù', 'To gently rub，stroke，or massage', '轻轻地抚摸、反复触摸（常带感情意味）', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322343/beijingnese-library/audio/1765408016670-beb6fdc99986ab30_vajjn5.webm', 69032, 'audio/webm', '2025-12-02 14:55:20.245-05', '2026-01-01 21:52:24.29-05');
INSERT INTO public.words VALUES (98, '搭茬儿', 'dā chár', 'to respond to someone''s small talk; to shoot the shit', '接话、搭讪', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322344/beijingnese-library/audio/1765423043877-e6e7f3a6fefeb942_ld7rn6.webm', 73642, 'audio/webm', '2025-12-02 14:55:20.282-05', '2026-01-01 21:52:25.111-05');
INSERT INTO public.words VALUES (70, '怹们', 'tān mèn', 'An honorific form of “they/them,” used respectfully for elders', '他们的尊称，多用于尊敬长辈或地位高的人', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322349/beijingnese-library/audio/1765407880844-ba794b644ee4ed12_c4wskr.webm', 37059, 'audio/webm', '2025-12-02 14:55:20.244-05', '2026-01-01 21:52:29.671-05');
INSERT INTO public.words VALUES (95, '不吝', 'bú lìn', 'i don''t mind; indicative of a generous attitude (but at times used ironically)', '不在乎、不介意', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322350/beijingnese-library/audio/1765407932135-dff48d54e9b1e955_kdkpz9.webm', 48641, 'audio/webm', '2025-12-02 14:55:20.278-05', '2026-01-01 21:52:30.79-05');
INSERT INTO public.words VALUES (74, '反摊子了', 'fǎn tān zi le', 'A situation gone awry.', '比喻事情搞砸、乱套了、做不了', 'Sayings', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322353/beijingnese-library/audio/1765421784255-ce9d4d1742768b32_orf7vx.wav', 393294, 'audio/x-wav', '2025-12-02 14:55:20.25-05', '2026-01-01 21:52:33.758-05');
INSERT INTO public.words VALUES (78, '抖吧', 'dóu bà', 'To hit or beat up', '殴打', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322354/beijingnese-library/audio/1765422462490-28e4e1a5b9c0ec65_odcmsx.webm', 55751, 'audio/webm', '2025-12-02 14:55:20.255-05', '2026-01-01 21:52:34.637-05');
INSERT INTO public.words VALUES (82, '秃噜嘴了', 'tū lu zuǐ le', 'Let something slip; accidentally said something that should’ve been kept secret.', '说漏嘴了、无意中说出来了', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322356/beijingnese-library/audio/1765423132594-0575cd6c09626937_xk572t.wav', 524366, 'audio/x-wav', '2025-12-02 14:55:20.26-05', '2026-01-01 21:52:37.525-05');
INSERT INTO public.words VALUES (68, '挨呲儿', 'āi cīr', 'To be berated; To recieve harsh criticism', '被说教、被训斥', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322358/beijingnese-library/audio/1765423687608-7de03fce4216eb1e_ddgwz3.webm', 44621, 'audio/webm', '2025-12-02 14:55:20.241-05', '2026-01-01 21:52:39.679-05');
INSERT INTO public.words VALUES (86, '老炮儿', 'lǎo pào er', 'An older beijing man with lots of street cred, sometimes a gangster.', '老北京的混社会、有经验、有江湖气的人。', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322361/beijingnese-library/audio/1765670218707-aa417ae4175a0589_kockej.webm', 46445, 'audio/webm', '2025-12-02 14:55:20.266-05', '2026-01-01 21:52:42.97-05');
INSERT INTO public.words VALUES (91, '碍事儿', 'ài shìr', 'To be in the way', '耽误事、添麻烦', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322338/beijingnese-library/audio/1765670090707-2a7c08b3af53be96_n7yepe.webm', 46744, 'audio/webm', '2025-12-02 14:55:20.273-05', '2026-01-01 21:52:18.997-05');
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
INSERT INTO public.words VALUES (111, '胡同二流子', 'hú tòng èr liú zi', 'Hutong troublemakers', '指北京的混人。', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322366/beijingnese-library/audio/1765422863933-b7e62c7aa04ceb2b_cyychq.webm', 56468, 'audio/webm', '2025-12-08 17:36:09.026-05', '2026-01-01 21:52:47.405-05');
INSERT INTO public.words VALUES (119, '今儿个', 'jīn r ge', 'today', '今天', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322367/beijingnese-library/audio/1765478180742-0459f9d3682a1e76_hcvt5i.webm', 63039, 'audio/webm', '2025-12-11 13:36:20.758-05', '2026-01-01 21:52:48.098-05');
INSERT INTO public.words VALUES (107, '打眼', 'dǎ yǎn', 'a misjudgement or wrong call', '看走眼、误判（多指买东西或识人）', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322368/beijingnese-library/audio/1765422891853-7b3bf4240b3c9690_tspyrq.webm', 65038, 'audio/webm', '2025-12-02 14:55:20.293-05', '2026-01-01 21:52:49.341-05');
INSERT INTO public.words VALUES (105, '嚼谷儿', 'jiáo gur', 'living expenses or daily spending; money for basic needs.', '生活费、口粮（泛指开销）', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322369/beijingnese-library/audio/1765422929167-a98cde52027b2592_gur14y.webm', 45871, 'audio/webm', '2025-12-02 14:55:20.29-05', '2026-01-01 21:52:50.919-05');
INSERT INTO public.words VALUES (112, '豆汁儿', 'dòu zhīr', 'a type of fermented bean drink invented in beijing.', '特属于北京的一种发酵豆制饮品', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322363/beijingnese-library/audio/1765464021373-38c41a6e60bfdd7b_ghdjf8.webm', 69291, 'audio/webm', '2025-12-09 21:25:00.911-05', '2026-01-01 21:52:44.046-05');
INSERT INTO public.words VALUES (106, '消停', 'xiāo ting', 'be quiet; stay calm; don’t cause trouble.', '安静、不折腾（表希望对方安分）', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322371/beijingnese-library/audio/1765303268325-9952e50216a59cfc_j2nsww.webm', 39843, 'audio/webm', '2025-12-02 14:55:20.292-05', '2026-01-01 21:52:52.047-05');
INSERT INTO public.words VALUES (114, '有样儿', 'yoǔ yàng r', 'charismatic, charming, smooth', '有范儿、有派头、有气势', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322372/beijingnese-library/audio/1765334907292-1c7c98b57de76010_la6lnv.webm', 55388, 'audio/webm', '2025-12-09 21:48:27.302-05', '2026-01-01 21:52:53.213-05');
INSERT INTO public.words VALUES (109, '念秧', 'niàn yāng', 'to hint or imply something indirectly; to repeatedly bring it up as a reminder.', '旁敲侧击、反复念叨（暗示别人）', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322376/beijingnese-library/audio/1765422956986-8c9a41e0cb4cb855_mfadhc.webm', 48281, 'audio/webm', '2025-12-02 14:55:20.294-05', '2026-01-01 21:52:57.27-05');
INSERT INTO public.words VALUES (100, '熬鹰', 'áo yīng', 'staying up late and refusing to sleep', '熬夜不睡觉（特指硬扛着不睡,）', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322377/beijingnese-library/audio/1765423004764-0050001978187138_t8dihd.webm', 44122, 'audio/webm', '2025-12-02 14:55:20.285-05', '2026-01-01 21:52:58.409-05');
INSERT INTO public.words VALUES (104, '门儿清', 'ménr qīng', 'very knowledgeable about something; knows it inside out.', '对事儿特别了解、心里有数', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322364/beijingnese-library/audio/1765407891452-ba8ba444b2b511f8_h0hsba.webm', 42221, 'audio/webm', '2025-12-02 14:55:20.289-05', '2026-01-01 21:52:44.978-05');
INSERT INTO public.words VALUES (117, '拿样儿', 'ná yàng r', 'uncharismatic and faking it; a poser', '棱状、没范儿硬装、摆架子', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322378/beijingnese-library/audio/1765423606508-1704fe03795634ea_jnwq1k.wav', 131150, 'audio/x-wav', '2025-12-09 22:24:38.548-05', '2026-01-01 21:52:59.463-05');
INSERT INTO public.words VALUES (118, '您', 'nín', 'A polite way to say "you" in beijing hua. Can also be used to sass people.', '老北京人对“你”的尊称。也可以用来阴阳别人。', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322365/beijingnese-library/audio/1765471702174-165275d4bdff6b9b_dzpazq.webm', 58593, 'audio/webm', '2025-12-11 11:48:22.187-05', '2026-01-01 21:52:46.365-05');
INSERT INTO public.words VALUES (115, '硬茬儿', 'yìng chá r', 'someone strong; a difficult to deal with character', '厉害、不好对付的人、狠角色', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322379/beijingnese-library/audio/1765669946395-6ac90e7dfbbcd3e5_q6mruy.webm', 60178, 'audio/webm', '2025-12-09 21:55:24.489-05', '2026-01-01 21:53:00.558-05');
INSERT INTO public.words VALUES (99, '颠儿了', 'diān r le', 'to take off; to quickly leave', '溜走、离开', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322381/beijingnese-library/audio/1765670014345-ac3d647b1905c01b_qu6ut7.webm', 36029, 'audio/webm', '2025-12-02 14:55:20.284-05', '2026-01-01 21:53:02.23-05');
INSERT INTO public.words VALUES (79, '得瑟', 'dè se', 'Show off; be smug or overly proud', '炫耀、显摆、臭美、自鸣得意', 'Noun', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322345/beijingnese-library/audio/1765407837725-58018c69676c1f7d_rhiflj.webm', 45739, 'audio/webm', '2025-12-02 14:55:20.256-05', '2026-01-01 21:52:28.342-05');
INSERT INTO public.words VALUES (97, '吃瓜落', 'chī guā lào', 'be snubbed due to a connection to someone else', '受牵连、跟着倒霉', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322354/beijingnese-library/audio/1765423070896-bda2600413288a2a_zsze8k.webm', 53868, 'audio/webm', '2025-12-02 14:55:20.281-05', '2026-01-01 21:52:35.647-05');
INSERT INTO public.words VALUES (67, '呲儿喽', 'cīr lou', 'To berate; to criticize harshly', '训斥', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322360/beijingnese-library/audio/1765423723673-222c14b43ca6c373_vnqazc.webm', 55740, 'audio/webm', '2025-12-02 14:55:20.239-05', '2026-01-01 21:52:40.802-05');
INSERT INTO public.words VALUES (116, '意会一下', 'yì huì yí xià', 'a direction for the subject to understand what is implied.', '心领一下、自己领悟', 'Sayings', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322373/beijingnese-library/audio/1765336381223-bff2ab64d0a28333_km6sr1.webm', 48767, 'audio/webm', '2025-12-09 22:13:01.236-05', '2026-01-01 21:52:53.976-05');
INSERT INTO public.words VALUES (113, '倍儿', 'bèr', 'term used to emphasize the quality of a certain subject', '形容什么东西特别的怎么样', 'Adjective', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322374/beijingnese-library/audio/1765334205058-24a1a7a3ee1d3db1_rzwsj8.webm', 39962, 'audio/webm', '2025-12-09 21:36:45.074-05', '2026-01-01 21:52:56.472-05');
INSERT INTO public.words VALUES (108, '抖机灵', 'dǒu jī ling', 'to act clever in a petty or sly way', '耍小聪明（略带贬义）', 'Verb', 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322380/beijingnese-library/audio/1765669985608-65cc87cdbc1c353c_af81ub.webm', 51280, 'audio/webm', '2025-12-02 14:55:20.293-05', '2026-01-01 21:53:01.334-05');


--
-- Data for Name: word_recordings; Type: TABLE DATA; Schema: public; Owner: nicolesun
--

INSERT INTO public.word_recordings VALUES (1, 91, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322382/beijingnese-library/audio/1765670090707-2a7c08b3af53be96_bzaiiv.webm', 46744, 'audio/webm', 1, '2025-12-02 14:55:20.273-05', '2026-01-01 21:53:02.946-05');
INSERT INTO public.word_recordings VALUES (2, 94, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322383/beijingnese-library/audio/1765670048412-3dd46b5e005ede3e_lx7yct.webm', 47582, 'audio/webm', 1, '2025-12-02 14:55:20.277-05', '2026-01-01 21:53:04.023-05');
INSERT INTO public.word_recordings VALUES (3, 66, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322384/beijingnese-library/audio/1765423357203-797a73d25ff6bb69_lodsmf.wav', 131150, 'audio/x-wav', 1, '2025-12-02 14:55:20.238-05', '2026-01-01 21:53:04.971-05');
INSERT INTO public.word_recordings VALUES (4, 83, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322385/beijingnese-library/audio/1765423410302-4ef6d451ce1c36e4_vxhfkn.webm', 51799, 'audio/webm', 1, '2025-12-02 14:55:20.262-05', '2026-01-01 21:53:05.817-05');
INSERT INTO public.word_recordings VALUES (5, 71, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322386/beijingnese-library/audio/1765408016670-beb6fdc99986ab30_dmb549.webm', 69032, 'audio/webm', 1, '2025-12-02 14:55:20.245-05', '2026-01-01 21:53:06.678-05');
INSERT INTO public.word_recordings VALUES (6, 98, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322387/beijingnese-library/audio/1765423043877-e6e7f3a6fefeb942_k5qnyc.webm', 73642, 'audio/webm', 1, '2025-12-02 14:55:20.282-05', '2026-01-01 21:53:07.555-05');
INSERT INTO public.word_recordings VALUES (7, 79, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322388/beijingnese-library/audio/1765407837725-58018c69676c1f7d_o5yzjr.webm', 45739, 'audio/webm', 1, '2025-12-02 14:55:20.256-05', '2026-01-01 21:53:08.892-05');
INSERT INTO public.word_recordings VALUES (8, 70, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322389/beijingnese-library/audio/1765407880844-ba794b644ee4ed12_con9hd.webm', 37059, 'audio/webm', 1, '2025-12-02 14:55:20.244-05', '2026-01-01 21:53:09.643-05');
INSERT INTO public.word_recordings VALUES (9, 95, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322390/beijingnese-library/audio/1765407932135-dff48d54e9b1e955_cmrsd1.webm', 48641, 'audio/webm', 1, '2025-12-02 14:55:20.278-05', '2026-01-01 21:53:10.72-05');
INSERT INTO public.word_recordings VALUES (10, 74, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322391/beijingnese-library/audio/1765421784255-ce9d4d1742768b32_yreycj.wav', 393294, 'audio/x-wav', 1, '2025-12-02 14:55:20.25-05', '2026-01-01 21:53:12.81-05');
INSERT INTO public.word_recordings VALUES (11, 78, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322393/beijingnese-library/audio/1765422462490-28e4e1a5b9c0ec65_dj8avf.webm', 55751, 'audio/webm', 1, '2025-12-02 14:55:20.255-05', '2026-01-01 21:53:14.627-05');
INSERT INTO public.word_recordings VALUES (12, 97, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322395/beijingnese-library/audio/1765423070896-bda2600413288a2a_udhrru.webm', 53868, 'audio/webm', 1, '2025-12-02 14:55:20.281-05', '2026-01-01 21:53:15.66-05');
INSERT INTO public.word_recordings VALUES (13, 82, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322396/beijingnese-library/audio/1765423132594-0575cd6c09626937_igirxr.wav', 524366, 'audio/x-wav', 1, '2025-12-02 14:55:20.26-05', '2026-01-01 21:53:16.806-05');
INSERT INTO public.word_recordings VALUES (14, 68, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322397/beijingnese-library/audio/1765423687608-7de03fce4216eb1e_hjva3w.webm', 44621, 'audio/webm', 1, '2025-12-02 14:55:20.241-05', '2026-01-01 21:53:18.108-05');
INSERT INTO public.word_recordings VALUES (15, 67, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322398/beijingnese-library/audio/1765423723673-222c14b43ca6c373_iygxv8.webm', 55740, 'audio/webm', 1, '2025-12-02 14:55:20.239-05', '2026-01-01 21:53:18.882-05');
INSERT INTO public.word_recordings VALUES (16, 86, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322399/beijingnese-library/audio/1765670218707-aa417ae4175a0589_jdhqal.webm', 46445, 'audio/webm', 1, '2025-12-02 14:55:20.266-05', '2026-01-01 21:53:19.67-05');
INSERT INTO public.word_recordings VALUES (17, 112, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322399/beijingnese-library/audio/1765464021373-38c41a6e60bfdd7b_goissy.webm', 69291, 'audio/webm', 1, '2025-12-09 21:25:00.911-05', '2026-01-01 21:53:20.377-05');
INSERT INTO public.word_recordings VALUES (18, 104, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322400/beijingnese-library/audio/1765407891452-ba8ba444b2b511f8_xiuk8g.webm', 42221, 'audio/webm', 1, '2025-12-02 14:55:20.289-05', '2026-01-01 21:53:21.57-05');
INSERT INTO public.word_recordings VALUES (19, 118, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322401/beijingnese-library/audio/1765471702174-165275d4bdff6b9b_xmqnic.webm', 58593, 'audio/webm', 1, '2025-12-11 11:48:22.187-05', '2026-01-01 21:53:22.353-05');
INSERT INTO public.word_recordings VALUES (20, 111, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322402/beijingnese-library/audio/1765422863933-b7e62c7aa04ceb2b_vb4xov.webm', 56468, 'audio/webm', 1, '2025-12-08 17:36:09.026-05', '2026-01-01 21:53:23.554-05');
INSERT INTO public.word_recordings VALUES (21, 119, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322403/beijingnese-library/audio/1765478180742-0459f9d3682a1e76_ulwhe4.webm', 63039, 'audio/webm', 1, '2025-12-11 13:36:20.758-05', '2026-01-01 21:53:24.946-05');
INSERT INTO public.word_recordings VALUES (22, 107, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322405/beijingnese-library/audio/1765422891853-7b3bf4240b3c9690_kdldq7.webm', 65038, 'audio/webm', 1, '2025-12-02 14:55:20.293-05', '2026-01-01 21:53:25.95-05');
INSERT INTO public.word_recordings VALUES (23, 105, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322406/beijingnese-library/audio/1765422929167-a98cde52027b2592_o1lypj.webm', 45871, 'audio/webm', 1, '2025-12-02 14:55:20.29-05', '2026-01-01 21:53:26.787-05');
INSERT INTO public.word_recordings VALUES (24, 106, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322407/beijingnese-library/audio/1765303268325-9952e50216a59cfc_lhr673.webm', 39843, 'audio/webm', 1, '2025-12-02 14:55:20.292-05', '2026-01-01 21:53:27.535-05');
INSERT INTO public.word_recordings VALUES (25, 114, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322407/beijingnese-library/audio/1765334907292-1c7c98b57de76010_o7tadz.webm', 55388, 'audio/webm', 1, '2025-12-09 21:48:27.302-05', '2026-01-01 21:53:29.442-05');
INSERT INTO public.word_recordings VALUES (26, 116, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322409/beijingnese-library/audio/1765336381223-bff2ab64d0a28333_phy7lt.webm', 48767, 'audio/webm', 1, '2025-12-09 22:13:01.236-05', '2026-01-01 21:53:30.593-05');
INSERT INTO public.word_recordings VALUES (27, 113, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322411/beijingnese-library/audio/1765334205058-24a1a7a3ee1d3db1_hcjib9.webm', 39962, 'audio/webm', 1, '2025-12-09 21:36:45.074-05', '2026-01-01 21:53:38.761-05');
INSERT INTO public.word_recordings VALUES (28, 109, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322419/beijingnese-library/audio/1765422956986-8c9a41e0cb4cb855_fxnkzu.webm', 48281, 'audio/webm', 1, '2025-12-02 14:55:20.294-05', '2026-01-01 21:53:41.808-05');
INSERT INTO public.word_recordings VALUES (29, 100, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322422/beijingnese-library/audio/1765423004764-0050001978187138_d7e5ws.webm', 44122, 'audio/webm', 1, '2025-12-02 14:55:20.285-05', '2026-01-01 21:53:42.601-05');
INSERT INTO public.word_recordings VALUES (30, 117, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322422/beijingnese-library/audio/1765423606508-1704fe03795634ea_ekouot.wav', 131150, 'audio/x-wav', 1, '2025-12-09 22:24:38.548-05', '2026-01-01 21:53:43.356-05');
INSERT INTO public.word_recordings VALUES (31, 115, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322423/beijingnese-library/audio/1765669946395-6ac90e7dfbbcd3e5_siiaod.webm', 60178, 'audio/webm', 1, '2025-12-09 21:55:24.489-05', '2026-01-01 21:53:44.046-05');
INSERT INTO public.word_recordings VALUES (32, 108, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322424/beijingnese-library/audio/1765669985608-65cc87cdbc1c353c_nhvyam.webm', 51280, 'audio/webm', 1, '2025-12-02 14:55:20.293-05', '2026-01-01 21:53:45.175-05');
INSERT INTO public.word_recordings VALUES (33, 99, 'https://res.cloudinary.com/djjz22lh7/video/upload/v1767322425/beijingnese-library/audio/1765670014345-ac3d647b1905c01b_yabz2v.webm', 36029, 'audio/webm', 1, '2025-12-02 14:55:20.284-05', '2026-01-01 21:53:46.041-05');


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

\unrestrict Cx12QyjpO5hIzoiU0FrTykN9eniymCnEpUPBTFO7hk41brKhpeqSae4tPNV2d9h

