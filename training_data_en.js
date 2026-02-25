/* ============================================
   AIcomment — English Training Data & Phrase Pools
   training_data_en.js

   5 Personas × 20 Samples = 100 Synthetic Reflection Papers
   CEFR-aligned phrase pools: A2→C2

   ⚠️ ABSOLUTE RULE: No fabricated references,
      citations, or URLs are included.
   ============================================ */

/* ============================================
   LANG_EN — English Phrase Pool Structure
   ============================================ */
const LANG_EN = {
    /* ----------------------------------------
       Level 1: The Engaged Novice (CEFR A2–B1)
       Simple sentences, personal reactions,
       "I felt," "It was interesting" patterns
       ---------------------------------------- */
    level1: {
        openers: [
            (lec, topic) => `In today's ${lec} class, we learned about ${topic}, and I found it really interesting.`,
            (lec, topic) => `I didn't know much about ${topic} before this ${lec} lecture, so everything was new to me.`,
            (lec, topic) => `The ${lec} lecture today was about ${topic}. I was surprised by what I learned.`,
            (lec, topic) => `Today's ${lec} class covered ${topic}. At first I thought it would be boring, but it was actually fun.`,
            (lec, topic) => `I really enjoyed the part about ${topic} in ${lec} today.`,
            (lec, topic) => `Before this class, I had never heard of ${topic}. Now I want to learn more about it.`,
            (lec, topic) => `The lecture on ${topic} in ${lec} was one of the most interesting ones so far.`,
            (lec, topic) => `We talked about ${topic} in ${lec} today, and it made me think a lot.`,
            (lec, topic) => `I honestly didn't expect ${topic} to be so fascinating when the professor started talking about it.`,
            (lec, topic) => `Today in ${lec}, the professor explained ${topic} in a way that was easy to understand.`,
            (lec, topic) => `${topic} was the main topic in ${lec} today, and I couldn't stop thinking about it afterwards.`,
            (lec, topic) => `When the professor showed examples of ${topic}, I was like "wow, that's so cool."`,
        ],
        bodies: [
            (topic, sub) => `I thought it was really cool how ${topic} works. I never thought about it before.`,
            (topic, sub) => `The examples the professor showed helped me understand ${topic} much better.`,
            (topic, sub) => `I tried to connect ${topic} to my own life, and I realized it affects me more than I thought.`,
            (topic, sub) => `My friend and I talked about ${topic} after class, and we both agreed it was surprising.`,
            (topic, sub) => `I watched a video about ${topic} on YouTube before, but now I understand it much better.`,
            (topic, sub) => `The part about ${sub || topic} was a bit hard to understand, but I think I got the main idea.`,
            (topic, sub) => `I didn't know that ${topic} was used in everyday life. That made it feel more real to me.`,
            (topic, sub) => `When we did the group activity about ${topic}, everyone had different opinions, which was fun.`,
            (topic, sub) => `This reminded me of my time doing [USER_INTEREST]. It's cool to see how it connects.`,
            (topic, sub) => `I've always been interested in [USER_INTEREST], and today I realized it actually relates to ${topic}.`,
        ],
        reflections: [
            'I want to learn more about this topic because it was really eye-opening.',
            'I think this kind of class is great because it makes you think about things you normally ignore.',
            'I feel like I understand the world a little better now.',
            'I\'m going to look this up on my own because I want to know more.',
            'It\'s amazing how one class can change the way you see things.',
            'I told my family about what I learned today and they were surprised too.',
            'I still have some questions, but that\'s okay because it means I\'m learning.',
            'I never thought a lecture could be this interesting. I hope the next one is just as good.',
        ],
        closings: [
            (lec) => `Overall, I really liked today's ${lec} class. I'm looking forward to the next one.`,
            (lec) => `I hope we keep learning about topics like this. It makes class more fun.`,
            (lec) => `Today's class made me realize that there's so much I don't know yet, and that's exciting.`,
            (lec) => `I can't wait to share what I learned with my friends.`,
            (lec) => `I feel more motivated to study after today's ${lec} lecture.`,
            (lec) => `This was one of those classes that really sticks with you.`,
        ],
    },

    /* ----------------------------------------
       Level 2: The Practical Applicator (CEFR B1–B2)
       Real-world connections, team projects,
       personal experience–theory bridges
       ---------------------------------------- */
    level2: {
        openers: [
            (lec, topic) => `This week's ${lec} lecture on ${topic} had a lot of practical takeaways that I found relevant to my own experience.`,
            (lec, topic) => `The discussion of ${topic} in ${lec} made me reconsider some of the choices I've made in past projects.`,
            (lec, topic) => `I was particularly interested in how ${topic} was presented in ${lec}, because I've encountered similar situations in real life.`,
            (lec, topic) => `Learning about ${topic} gave me new ideas for how to approach problems in my own work.`,
            (lec, topic) => `The ${lec} session on ${topic} was insightful because it bridged the gap between theory and practice.`,
            (lec, topic) => `One thing I appreciated about this ${lec} lecture was how directly ${topic} applies to everyday situations.`,
            (lec, topic) => `As someone who has worked on team projects, I found the link between ${topic} and practical decision-making especially interesting.`,
            (lec, topic) => `The way ${topic} was explained in ${lec} helped me see connections I hadn't noticed before.`,
            (lec, topic) => `Coming into this lecture, I thought ${topic} was purely theoretical, but I now see its practical value.`,
            (lec, topic) => `After today's ${lec} class, I have a much clearer understanding of how ${topic} plays out in real-world settings.`,
            (lec, topic) => `The examples used in ${lec} to illustrate ${topic} felt very close to what I've experienced in extracurricular activities.`,
            (lec, topic) => `What stood out to me most was how ${topic} can be applied to media production workflows.`,
        ],
        bodies: [
            (topic, sub) => `In my experience working on group projects, ${topic} has always been a challenge, but now I have a framework to approach it more systematically.`,
            (topic, sub) => `The professor's example about ${topic} in media production reminded me of a project I worked on where we faced the same issue.`,
            (topic, sub) => `When I think about how ${topic} applies to social media marketing, I can see how understanding it could improve engagement strategies.`,
            (topic, sub) => `I tried applying ${topic} to a situation from my internship, and it actually explains a lot of what I observed.`,
            (topic, sub) => `The connection between ${topic} and ${sub || 'audience behavior'} is especially relevant for anyone working in content creation.`,
            (topic, sub) => `During the group discussion, my teammate pointed out a practical case of ${topic} in advertising, which I hadn't considered.`,
            (topic, sub) => `The hands-on activity during class helped me understand ${topic} in a way that reading alone couldn't.`,
            (topic, sub) => `Working in [USER_INTEREST] taught me a lot about practical problem-solving, and I can see how ${topic} provides the theoretical basis for what I was doing intuitively.`,
            (topic, sub) => `I believe that combining the theory of ${topic} with real-world experimentation would yield better results than either approach alone.`,
            (topic, sub) => `The data visualization example really drove home how ${topic} can make abstract concepts accessible.`,
        ],
        reflections: [
            'Going forward, I want to apply what I learned today to my next team project.',
            'I think understanding theory is important, but being able to use it in practice is what really matters.',
            'This lecture reminded me that there\'s always more to learn, even about things I thought I already understood.',
            'I plan to share these concepts with my study group because I think they would benefit from them too.',
            'Knowing the theory behind something gives you more confidence when making decisions in the field.',
            'I was impressed by how directly applicable this knowledge is to real-world scenarios.',
            'As someone interested in [USER_INTEREST], I\'m excited to explore how today\'s topic overlaps with my own area.',
            'I need to read more about this topic before the next class so I can contribute more to the discussion.',
        ],
        closings: [
            (lec) => `This ${lec} session was valuable because it showed me how academic knowledge translates into practical skills.`,
            (lec) => `I feel better equipped to handle similar situations in my future career after today's lecture.`,
            (lec) => `The bridge between theory and practice is exactly what makes lectures like this worthwhile.`,
            (lec) => `I'm going to look for opportunities to apply ${lec}'s concepts in my upcoming projects.`,
            (lec) => `Today's class gave me a new perspective that I can use both in school and in my personal interests.`,
            (lec) => `Connecting what we learn in the classroom to what happens in the real world is, I think, the most important part of education.`,
        ],
    },

    /* ----------------------------------------
       Level 3: The Analytical Skeptic (CEFR B2)
       Methodology focus, data validity,
       logical connectors, evidence-based reasoning
       ---------------------------------------- */
    level3: {
        openers: [
            (lec, topic) => `The ${lec} lecture on ${topic} raised several important methodological questions that warrant closer examination.`,
            (lec, topic) => `While the discussion of ${topic} in ${lec} was informative, there are aspects of the analysis that could benefit from greater rigor.`,
            (lec, topic) => `Today's ${lec} session presented ${topic} in a way that, while accessible, may have oversimplified some key nuances.`,
            (lec, topic) => `The framework used to explain ${topic} in ${lec} is useful, but it is worth considering its limitations.`,
            (lec, topic) => `I found the ${lec} lecture on ${topic} thought-provoking, particularly regarding the evidence cited in support of the main argument.`,
            (lec, topic) => `The treatment of ${topic} in today's ${lec} class invited both agreement and skepticism in equal measure.`,
            (lec, topic) => `Several claims made about ${topic} during ${lec} deserve closer scrutiny, especially those concerning statistical validity.`,
            (lec, topic) => `Although the ${lec} lecture on ${topic} was well-structured, I noticed some gaps in the reasoning that I would like to address.`,
            (lec, topic) => `The data presented in ${lec} to support ${topic} was compelling, but the interpretation could be challenged on several fronts.`,
            (lec, topic) => `From an analytical standpoint, ${topic} as discussed in ${lec} presents both opportunities and pitfalls for researchers.`,
            (lec, topic) => `As someone who values empirical evidence, I appreciated the data-driven approach to ${topic} in ${lec}, though I have reservations about certain conclusions.`,
            (lec, topic) => `The ${lec} lecture on ${topic} prompted me to reconsider some assumptions I had previously taken for granted.`,
        ],
        bodies: [
            (topic, sub) => `One issue with the analysis of ${topic} is the potential for confounding variables, which were not adequately addressed in the lecture.`,
            (topic, sub) => `The sample size referenced in the study of ${topic} raises concerns about generalizability. A larger, more diverse sample would strengthen the conclusions.`,
            (topic, sub) => `While the correlation between ${topic} and ${sub || 'the dependent variable'} was noted, correlation does not imply causation—a distinction the lecture could have emphasized more.`,
            (topic, sub) => `The operational definition of ${topic} used in this context seems somewhat narrow, which may limit the scope of the findings.`,
            (topic, sub) => `It would be valuable to see ${topic} examined using a mixed-methods approach, combining quantitative data with qualitative insights.`,
            (topic, sub) => `The statistical tests applied to ${topic} appear appropriate, but the effect size was not reported, making it difficult to assess practical significance.`,
            (topic, sub) => `I wonder whether the results related to ${topic} would replicate in a different cultural context, given the original study's demographic composition.`,
            (topic, sub) => `Drawing from my experience in [USER_INTEREST], I can identify analogous patterns where similar methodological oversights have led to misleading conclusions.`,
            (topic, sub) => `The argument would be stronger if the research on ${topic} accounted for potential publication bias in the literature being cited.`,
            (topic, sub) => `During the group discussion, a classmate raised the valid point that the ${topic} model does not account for longitudinal changes, which I found pertinent.`,
        ],
        reflections: [
            'This lecture reinforced the importance of questioning the methodology behind any claim, no matter how well-established it may seem.',
            'I intend to review the original data sources cited in the lecture to form a more independent assessment.',
            'Being analytically rigorous is not about being contrarian; it is about ensuring that conclusions are well-supported.',
            'I realize that my own thinking on this topic was shaped by assumptions I had not examined critically until now.',
            'In future assignments, I will make a conscious effort to evaluate effect sizes alongside statistical significance.',
            'The gap between statistical significance and practical significance is something I want to explore further.',
            'Having experience in [USER_INTEREST] gives me a unique lens through which to evaluate the validity of such claims.',
            'I should develop a habit of checking for replication studies whenever I encounter a bold empirical claim.',
        ],
        closings: [
            (lec) => `In summary, the ${lec} lecture on this topic was stimulating, but a more critical approach to the evidence would make the argument more convincing.`,
            (lec) => `I leave this class with more questions than answers, which I consider a sign of a productive learning experience.`,
            (lec) => `Moving forward, I plan to adopt a more evidence-based approach to evaluating the claims presented in this course.`,
            (lec) => `The ability to scrutinize data effectively is, I believe, one of the most important skills that university education can provide.`,
            (lec) => `I look forward to examining this topic with greater depth in future assignments, applying the analytical tools discussed today.`,
            (lec) => `Critical engagement with evidence is not a weakness but a strength, and today's ${lec} reinforced that conviction.`,
        ],
    },

    /* ----------------------------------------
       Level 4: The Critical Theorist (CEFR B2–C1)
       Challenges premises, power dynamics,
       structural analysis, counter-readings
       ---------------------------------------- */
    level4: {
        openers: [
            (lec, topic) => `The framing of ${topic} in today's ${lec} lecture, while internally consistent, rests on assumptions that merit interrogation.`,
            (lec, topic) => `I find it necessary to challenge the dominant narrative surrounding ${topic} as presented in ${lec}, particularly its treatment of power dynamics.`,
            (lec, topic) => `The ${lec} discussion of ${topic} offered a conventional reading, but alternative interpretations—ones that foreground structural inequalities—deserve equal consideration.`,
            (lec, topic) => `Before accepting the conclusions drawn about ${topic} in ${lec}, we should examine whose voices are centered and whose are marginalized in this analysis.`,
            (lec, topic) => `Today's ${lec} lecture on ${topic} presented what appeared to be an objective account, but all narratives are situated, and this one is no exception.`,
            (lec, topic) => `The theoretical lens applied to ${topic} in ${lec} privileges certain epistemological traditions over others, a point that was not adequately addressed.`,
            (lec, topic) => `I wish to offer a counter-reading of ${topic} as discussed in ${lec}, one that takes into account the structural inversions often overlooked in mainstream analysis.`,
            (lec, topic) => `The ${lec} lecture on ${topic} was intellectually engaging, yet I found its political implications insufficiently explored.`,
            (lec, topic) => `One limitation of the ${lec} approach to ${topic} is its failure to interrogate the power structures embedded within the subject itself.`,
            (lec, topic) => `Rather than accepting ${topic} as a settled matter, today's ${lec} should be treated as an invitation to question fundamentally what we take for granted.`,
            (lec, topic) => `The discourse around ${topic} in ${lec} reveals as much about institutional biases as it does about the subject matter itself.`,
            (lec, topic) => `Deliberately positioning myself against the grain of the ${lec} lecture, I want to explore what a subversive reading of ${topic} might reveal.`,
        ],
        bodies: [
            (topic, sub) => `The reversal of the master-servant dynamic is a recurring trope in the genre under discussion, and ${topic} can be read as another instance of this structural inversion.`,
            (topic, sub) => `What the lecture framed as a universal phenomenon is, upon closer inspection, culturally specific. The applicability of ${topic} beyond Western contexts is far from self-evident.`,
            (topic, sub) => `The notion that ${topic} operates independently of social power relations is itself an ideological position, one that obscures more than it reveals.`,
            (topic, sub) => `If we read ${topic} against the grain, as a site of contestation rather than consensus, a far more complex picture emerges.`,
            (topic, sub) => `The binary framework used to analyze ${topic} fails to account for the fluidity and hybridity that characterize contemporary cultural expressions.`,
            (topic, sub) => `The lecture's treatment of ${sub || topic} as a neutral category overlooks the ways in which categorization itself is an exercise of power.`,
            (topic, sub) => `This theoretical framework bears a striking resemblance to the structural inversion often observed in [USER_INTEREST], suggesting a universal pattern of dominant-subordinate role reversal.`,
            (topic, sub) => `Centering the analysis of ${topic} on the experiences of the marginalized—rather than the dominant group—would yield fundamentally different conclusions.`,
            (topic, sub) => `The absence of intersectional analysis in the discussion of ${topic} is a significant oversight that limits the depth of the argument.`,
            (topic, sub) => `Genre conventions should not be dismissed as mere clichés; they encode deep-seated cultural anxieties that ${topic} both expresses and attempts to resolve.`,
        ],
        reflections: [
            'Maintaining a critical stance is not an act of hostility toward the subject but an expression of genuine intellectual engagement.',
            'I must acknowledge that my own critical reading is also situated and partial—no analysis escapes its own positionality.',
            'The value of challenging received wisdom lies not in arriving at a definitive answer but in keeping the conversation alive.',
            'I find that the most productive learning happens when I resist the urge to accept frameworks uncritically.',
            'Engaging with [USER_INTEREST] has sharpened my sensitivity to structural patterns of power, which I now recognize in this academic context as well.',
            'It is precisely when an argument appears most natural and self-evident that we should subject it to the most rigorous scrutiny.',
            'I intend to develop this counter-reading further in my essay, drawing on additional theoretical resources.',
            'The discomfort that comes from questioning established frameworks is, I believe, a necessary condition for intellectual growth.',
        ],
        closings: [
            (lec) => `The ${lec} discussion should not be concluded but rather continued, with greater attention to the structural dynamics that remain unexamined.`,
            (lec) => `Rather than reaching closure, I prefer to leave this analysis open-ended, as a provocation for further inquiry.`,
            (lec) => `Critical theory, at its best, does not destroy the object of study but reveals its hidden dimensions—today's ${lec} provided ample material for such work.`,
            (lec) => `In my upcoming paper, I plan to use today's lecture as a departure point for a more thoroughgoing structural analysis.`,
            (lec) => `The capacity to question is more valuable than the capacity to answer, and today's ${lec} reminded me of that principle.`,
            (lec) => `Ultimately, the most important takeaway is not any single conclusion but the practice of sustained critical engagement itself.`,
        ],
    },

    /* ----------------------------------------
       Level 5: The Classical Academic (CEFR C1–C2)
       Highly formal, complex syntax,
       advanced vocabulary, strictly structured
       ---------------------------------------- */
    level5: {
        openers: [
            (lec, topic) => `The ${lec} lecture's treatment of ${topic} constitutes a significant contribution to the ongoing discourse within this field, warranting sustained analytical engagement.`,
            (lec, topic) => `It is within the context of evolving methodological paradigms that the discussion of ${topic} in ${lec} acquires its full interpretive significance.`,
            (lec, topic) => `The theoretical apparatus deployed in ${lec} to elucidate ${topic} draws upon a rich tradition of scholarship, the implications of which extend well beyond the immediate subject matter.`,
            (lec, topic) => `The epistemological foundations underpinning the analysis of ${topic} in ${lec} merit careful examination, particularly as they pertain to the validity of the inferential claims advanced.`,
            (lec, topic) => `In situating ${topic} within its broader intellectual lineage, the ${lec} lecture has provided a rigorous yet necessarily selective account of the relevant theoretical landscape.`,
            (lec, topic) => `The conceptual architecture employed in ${lec} to analyze ${topic} is both internally coherent and methodologically sophisticated, though it is not without its constraints.`,
            (lec, topic) => `A critical appraisal of ${topic} as articulated in ${lec} reveals the extent to which prevailing theoretical assumptions shape—and sometimes limit—scholarly inquiry.`,
            (lec, topic) => `The ${lec} presentation of ${topic} operates at the intersection of several disciplinary traditions, a convergence that is both productive and potentially fraught with tension.`,
            (lec, topic) => `It is the contention of this reflection that ${topic}, as explicated in ${lec}, occupies a pivotal yet under-theorized position within the broader field.`,
            (lec, topic) => `The ramifications of ${topic} as discussed in ${lec} extend to fundamental questions concerning the nature of evidence, inference, and scholarly interpretation.`,
            (lec, topic) => `One must approach ${topic} with the recognition that the conceptual categories employed in ${lec} are themselves historically contingent constructs.`,
            (lec, topic) => `The dialectical interplay between theory and evidence, as exemplified in ${lec}'s treatment of ${topic}, underscores the inherent complexity of academic inquiry.`,
        ],
        bodies: [
            (topic, sub) => `The construct validity of ${topic} hinges upon the degree to which its operationalization captures the latent variable it purports to measure—a condition that is by no means trivially satisfied.`,
            (topic, sub) => `When subjected to cross-cultural replication, the findings pertaining to ${topic} exhibit considerable variability, suggesting that the phenomenon may be more culturally situated than initially assumed.`,
            (topic, sub) => `The Bayesian framework, when applied to ${topic}, offers a principled mechanism for updating prior beliefs in light of new evidence, though the specification of informative priors remains a contentious methodological choice.`,
            (topic, sub) => `The relationship between ${topic} and ${sub || 'the broader theoretical framework'} is one of mutual constitution rather than simple causality, a distinction of considerable epistemological import.`,
            (topic, sub) => `Factor-analytic investigations of ${topic} have consistently identified a multidimensional structure, challenging earlier models that posited a unitary construct.`,
            (topic, sub) => `The internal consistency of scales measuring ${topic}, while often reported via Cronbach's alpha, would benefit from the application of omega coefficients, which account for the tau-equivalence assumption.`,
            (topic, sub) => `The parallel between ${topic} and structures observed within [USER_INTEREST] is instructive, as both domains instantiate the same fundamental tension between imposed order and emergent complexity.`,
            (topic, sub) => `Meta-analytic synthesis of the literature on ${topic} reveals a pattern of heterogeneity in effect sizes that cannot be attributed solely to sampling error, implicating substantive moderator variables.`,
            (topic, sub) => `The distinction between convergent and discriminant validity is of paramount importance when evaluating ${topic}, as it determines whether the construct can be meaningfully differentiated from related but conceptually distinct phenomena.`,
            (topic, sub) => `The deployment of MCMC estimation procedures in the context of ${topic} permits the analysis of complex hierarchical models that would be intractable under frequentist estimation approaches.`,
        ],
        reflections: [
            'The insights gleaned from this lecture shall be incorporated into the methodological framework of my own research, where they will inform both the design and the interpretive strategies employed.',
            'It is incumbent upon the researcher to maintain a reflexive awareness of the theoretical commitments that undergird one\'s analytical choices—a lesson this lecture has reinforced.',
            'The capacity for scholarly precision in the deployment of technical constructs such as those discussed today is, I submit, a hallmark of rigorous academic practice.',
            'I am compelled to revisit the relevant body of scholarship in order to situate today\'s discussion within the broader arc of theoretical development.',
            'The methodological sophistication demonstrated in this lecture serves as both an exemplar and a benchmark for my own future work.',
            'My sustained engagement with [USER_INTEREST] has furnished me with a set of analytical sensibilities that prove surprisingly transferable to the present academic domain.',
            'The transition from methodological description to methodological critique represents a developmental threshold that today\'s lecture has helped me to approach.',
            'One recognizes, upon reflection, that the selection of an analytical framework is itself a substantive research decision with far-reaching implications.',
        ],
        closings: [
            (lec) => `In conclusion, the ${lec} lecture has furnished a rigorous foundation upon which further inquiry may be productively constructed, and it is my intention to build upon this foundation in subsequent academic endeavors.`,
            (lec) => `The trajectory of scholarly development traced by today's ${lec} points toward a set of open questions that the field would do well to address with renewed vigor and methodological rigor.`,
            (lec) => `It remains incumbent upon researchers to ensure that the conceptual tools employed in the study of this topic are wielded with both precision and an awareness of their inherent limitations.`,
            (lec) => `The sustained engagement with primary sources and empirical evidence advocated in ${lec} constitutes, in my estimation, the sine qua non of credible academic scholarship.`,
            (lec) => `It is the mark of a mature scholarly disposition to recognize that methodological rigor and interpretive humility are not antithetical but complementary virtues.`,
            (lec) => `Ultimately, the value of today's lecture resides not merely in its substantive content but in the model of disciplined intellectual inquiry it exemplifies.`,
        ],
    },

    /* ----------------------------------------
       Connectors — Shared across levels
       ---------------------------------------- */
    connectors: {
        casual: ['Also,', 'And then,', 'But,', 'Plus,', 'By the way,', 'On top of that,', 'So basically,'],
        standard: ['However,', 'Moreover,', 'Therefore,', 'Furthermore,', 'In contrast,', 'In particular,', 'For instance,', 'In addition,', 'As a result,'],
        formal: ['Nevertheless,', 'Notwithstanding,', 'Conversely,', 'Indeed,', 'To this end,', 'In contradistinction,', 'It follows that', 'By extension,', 'Insofar as', 'That said,'],
    },
};

/* ============================================
   TRAINING_SAMPLES_EN — Representative Samples
   20 papers (4 per persona)
   ============================================ */
const TRAINING_SAMPLES_EN = [
    // ===== The Engaged Novice (Level 1, 4 samples) =====
    {
        id: 1, persona: 'Engaged Novice', level: 1, theme: 'Psychology (Optical Illusions)',
        text: 'In today\'s psychology class, we learned about optical illusions, and I found it really interesting. The professor showed us some pictures where lines looked different lengths even though they were the same. I thought it was really cool how optical illusions work. I never thought about it before. My friend and I talked about it after class, and we both agreed it was surprising. I want to learn more about this topic because it was really eye-opening. Overall, I really liked today\'s class. I\'m looking forward to the next one.'
    },
    {
        id: 5, persona: 'Engaged Novice', level: 1, theme: 'Media Studies',
        text: 'Today\'s media studies class covered filter bubbles. At first I thought it would be boring, but it was actually fun. The examples the professor showed helped me understand filter bubbles much better. I didn\'t know that they were used in everyday life on social media. That made it feel more real to me. I\'m going to look this up on my own because I want to know more. This was one of those classes that really sticks with you.'
    },
    {
        id: 10, persona: 'Engaged Novice', level: 1, theme: 'Mythology',
        text: 'We talked about hero myths in class today, and it made me think a lot. The professor explained the hero\'s journey in a way that was easy to understand. I tried to connect it to movies I\'ve seen, and I realized it affects a lot of storytelling. When we did the group activity, everyone had different opinions about what makes a hero, which was fun. It\'s amazing how one class can change the way you see things. I hope we keep learning about topics like this.'
    },
    {
        id: 15, persona: 'Engaged Novice', level: 1, theme: 'Statistics',
        text: 'I honestly didn\'t expect statistics to be so fascinating when the professor started talking about it. We learned about how averages can sometimes be misleading. I watched a video about this on YouTube before, but now I understand it much better. This reminded me of my time doing student council surveys. It\'s cool to see how it connects. I still have some questions, but that\'s okay because it means I\'m learning. I feel more motivated to study after today\'s lecture.'
    },

    // ===== The Practical Applicator (Level 2, 4 samples) =====
    {
        id: 21, persona: 'Practical Applicator', level: 2, theme: 'Film Production',
        text: 'This week\'s film production lecture on montage theory had a lot of practical takeaways that I found relevant to my own experience. In my experience working on group projects for our campus film club, montage has always been a challenge, but now I have a framework to approach it more systematically. The hands-on activity during class helped me understand montage in a way that reading alone couldn\'t. Going forward, I want to apply what I learned today to my next team project. This session was valuable because it showed me how academic knowledge translates into practical skills.'
    },
    {
        id: 28, persona: 'Practical Applicator', level: 2, theme: 'Media Studies',
        text: 'The discussion of advertising revenue models in media studies made me reconsider some of the choices I\'ve made in past projects. When I think about how revenue models apply to social media marketing, I can see how understanding them could improve engagement strategies. The professor\'s example about subscription versus ad-supported platforms reminded me of a project I worked on where we faced the same issue. I think understanding theory is important, but being able to use it in practice is what really matters. The bridge between theory and practice is exactly what makes lectures like this worthwhile.'
    },
    {
        id: 33, persona: 'Practical Applicator', level: 2, theme: 'Statistics',
        text: 'Learning about regression analysis gave me new ideas for how to approach problems in my own work. I tried applying regression analysis to a situation from my internship analyzing social media engagement metrics, and it actually explains a lot of what I observed. The data visualization example really drove home how regression can make abstract concepts accessible. Knowing the theory behind something gives you more confidence when making decisions in the field. I\'m going to look for opportunities to apply today\'s concepts in my upcoming projects.'
    },
    {
        id: 39, persona: 'Practical Applicator', level: 2, theme: 'Psychology',
        text: 'The media psychology session on audience attention was insightful because it bridged the gap between theory and practice. Working in video editing taught me a lot about practical problem-solving, and I can see how attention theory provides the theoretical basis for what I was doing intuitively. During the group discussion, my teammate pointed out a practical case of attention management in advertising, which I hadn\'t considered. I was impressed by how directly applicable this knowledge is to real-world scenarios. Today\'s class gave me a new perspective that I can use both in school and in my personal interests.'
    },

    // ===== The Analytical Skeptic (Level 3, 4 samples) =====
    {
        id: 41, persona: 'Analytical Skeptic', level: 3, theme: 'Statistics',
        text: 'The statistics lecture on Bayesian inference raised several important methodological questions that warrant closer examination. One issue with the analysis is the potential for confounding variables, which were not adequately addressed in the lecture. The statistical tests discussed appear appropriate, but the effect size was not reported, making it difficult to assess practical significance. This lecture reinforced the importance of questioning the methodology behind any claim, no matter how well-established it may seem. I leave this class with more questions than answers, which I consider a sign of a productive learning experience.'
    },
    {
        id: 47, persona: 'Analytical Skeptic', level: 3, theme: 'Psychology (Scale Construction)',
        text: 'While the discussion of scale construction in psychology was informative, there are aspects of the analysis that could benefit from greater rigor. The operational definition used in this context seems somewhat narrow, which may limit the scope of the findings. It would be valuable to see this topic examined using a mixed-methods approach, combining quantitative data with qualitative insights. I intend to review the original data sources cited in the lecture to form a more independent assessment. The ability to scrutinize data effectively is, I believe, one of the most important skills that university education can provide.'
    },
    {
        id: 52, persona: 'Analytical Skeptic', level: 3, theme: 'Media Studies',
        text: 'Today\'s media studies session presented agenda-setting theory in a way that, while accessible, may have oversimplified some key nuances. The sample size referenced in the cited study raises concerns about generalizability. A larger, more diverse sample would strengthen the conclusions. While the correlation between media coverage and public opinion was noted, correlation does not imply causation—a distinction the lecture could have emphasized more. Being analytically rigorous is not about being contrarian; it is about ensuring that conclusions are well-supported. Moving forward, I plan to adopt a more evidence-based approach to evaluating the claims presented in this course.'
    },
    {
        id: 58, persona: 'Analytical Skeptic', level: 3, theme: 'Psychology',
        text: 'The cognitive psychology lecture on working memory prompted me to reconsider some assumptions I had previously taken for granted. The framework used to explain working memory capacity is useful, but it is worth considering its limitations. I wonder whether the results would replicate in a different cultural context, given the original study\'s demographic composition. The argument would be stronger if the research accounted for potential publication bias in the literature being cited. I should develop a habit of checking for replication studies whenever I encounter a bold empirical claim. Critical engagement with evidence is not a weakness but a strength, and today\'s lecture reinforced that conviction.'
    },

    // ===== The Critical Theorist (Level 4, 4 samples) =====
    {
        id: 61, persona: 'Critical Theorist', level: 4, theme: 'Horror Film Analysis',
        text: 'The framing of the "Final Girl" trope in today\'s horror film lecture, while internally consistent, rests on assumptions that merit interrogation. The reversal of the master-servant dynamic is a recurring trope in the genre, and the Final Girl can be read as another instance of this structural inversion. What the lecture framed as a universal phenomenon is, upon closer inspection, culturally specific. Genre conventions should not be dismissed as mere clichés; they encode deep-seated cultural anxieties that horror both expresses and attempts to resolve. Maintaining a critical stance is not an act of hostility toward the subject but an expression of genuine intellectual engagement. The discussion should not be concluded but rather continued, with greater attention to the structural dynamics that remain unexamined.'
    },
    {
        id: 67, persona: 'Critical Theorist', level: 4, theme: 'Mythology',
        text: 'I find it necessary to challenge the dominant narrative surrounding the monomyth as presented in today\'s mythology lecture, particularly its treatment of power dynamics. The notion that the hero\'s journey operates independently of social power relations is itself an ideological position, one that obscures more than it reveals. The binary framework used to analyze the monomyth fails to account for the fluidity and hybridity that characterize non-Western storytelling traditions. The absence of intersectional analysis is a significant oversight that limits the depth of the argument. The value of challenging received wisdom lies not in arriving at a definitive answer but in keeping the conversation alive. Rather than reaching closure, I prefer to leave this analysis open-ended, as a provocation for further inquiry.'
    },
    {
        id: 73, persona: 'Critical Theorist', level: 4, theme: 'Media Studies',
        text: 'The media studies discussion of agenda-setting offered a conventional reading, but alternative interpretations—ones that foreground structural inequalities—deserve equal consideration. The lecture\'s treatment of media influence as a neutral category overlooks the ways in which categorization itself is an exercise of power. If we read media effects theory against the grain, as a site of contestation rather than consensus, a far more complex picture emerges. Centering the analysis on the experiences of the marginalized—rather than the dominant group—would yield fundamentally different conclusions. I must acknowledge that my own critical reading is also situated and partial—no analysis escapes its own positionality. The capacity to question is more valuable than the capacity to answer.'
    },
    {
        id: 78, persona: 'Critical Theorist', level: 4, theme: 'Horror Film Analysis',
        text: 'Rather than accepting the "pleasure of fear" thesis as settled, today\'s horror film lecture should be treated as an invitation to question fundamentally what we take for granted. The discourse around horror spectatorship reveals as much about institutional biases as it does about the viewing experience. This theoretical framework bears a striking resemblance to the structural inversion often observed in competitive gaming, suggesting a universal pattern of dominant-subordinate role reversal. It is precisely when an argument appears most natural and self-evident that we should subject it to the most rigorous scrutiny. I intend to develop this counter-reading further in my essay, drawing on additional theoretical resources. Critical theory, at its best, does not destroy the object of study but reveals its hidden dimensions.'
    },

    // ===== The Classical Academic (Level 5, 4 samples) =====
    {
        id: 81, persona: 'Classical Academic', level: 5, theme: 'Statistics (Bayesian)',
        text: 'It is within the context of evolving methodological paradigms that the discussion of Bayesian inference in today\'s lecture acquires its full interpretive significance. The Bayesian framework, when applied to statistical modeling, offers a principled mechanism for updating prior beliefs in light of new evidence, though the specification of informative priors remains a contentious methodological choice. The distinction between convergent and discriminant validity is of paramount importance when evaluating any construct, as it determines whether the phenomenon can be meaningfully differentiated from related but conceptually distinct measures. It is incumbent upon the researcher to maintain a reflexive awareness of the theoretical commitments that undergird one\'s analytical choices. The sustained engagement with primary sources and empirical evidence advocated in this lecture constitutes, in my estimation, the sine qua non of credible academic scholarship.'
    },
    {
        id: 87, persona: 'Classical Academic', level: 5, theme: 'Psychology (Scale Construction)',
        text: 'The conceptual architecture employed in today\'s lecture to analyze scale construction is both internally coherent and methodologically sophisticated, though it is not without its constraints. The internal consistency of psychological scales, while often reported via Cronbach\'s alpha, would benefit from the application of omega coefficients, which account for the tau-equivalence assumption. Factor-analytic investigations have consistently identified a multidimensional structure, challenging earlier models that posited a unitary construct. The construct validity of such instruments hinges upon the degree to which their operationalization captures the latent variable they purport to measure. The insights gleaned from this lecture shall be incorporated into the methodological framework of my own research. It remains incumbent upon researchers to ensure that conceptual tools are wielded with both precision and an awareness of their inherent limitations.'
    },
    {
        id: 93, persona: 'Classical Academic', level: 5, theme: 'Statistics (Bayesian)',
        text: 'The deployment of MCMC estimation procedures in the context of Bayesian analysis permits the analysis of complex hierarchical models that would be intractable under frequentist estimation approaches. Meta-analytic synthesis of the relevant literature reveals a pattern of heterogeneity in effect sizes that cannot be attributed solely to sampling error, implicating substantive moderator variables. The ramifications of this discussion extend to fundamental questions concerning the nature of evidence, inference, and scholarly interpretation. The capacity for scholarly precision in the deployment of technical constructs is, I submit, a hallmark of rigorous academic practice. One recognizes, upon reflection, that the selection of an analytical framework is itself a substantive research decision with far-reaching implications. The trajectory of scholarly development traced by today\'s lecture points toward open questions that the field would do well to address with renewed vigor.'
    },
    {
        id: 98, persona: 'Classical Academic', level: 5, theme: 'Psychology (Measurement)',
        text: 'A critical appraisal of measurement theory as articulated in today\'s lecture reveals the extent to which prevailing theoretical assumptions shape—and sometimes limit—scholarly inquiry. The relationship between classical test theory and item response theory is one of mutual constitution rather than simple succession, a distinction of considerable epistemological import. The parallel between psychometric modeling and structures observed within computational linguistics is instructive, as both domains instantiate the same fundamental tension between imposed order and emergent complexity. My sustained engagement with quantitative methods has furnished me with a set of analytical sensibilities that prove surprisingly transferable to the present domain. The transition from methodological description to methodological critique represents a developmental threshold that today\'s lecture has helped me to approach. It is the mark of a mature scholarly disposition to recognize that methodological rigor and interpretive humility are not antithetical but complementary virtues.'
    },
];
