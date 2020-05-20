<template>
	<article class="slds-card">
		<div class="slds-card__header slds-grid">
			<header class="slds-media slds-media_center slds-has-flexi-truncate">
				<div class="slds-media__figure">
					<span class="slds-icon_container slds-icon-standard-account" title="account">
						<svg class="slds-icon slds-icon_small" aria-hidden="true">
							<use
								xlink:href="@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg#account"
							/>
						</svg>
						<span class="slds-assistive-text">account</span>
					</span>
				</div>
				<div class="slds-media__body">
					<h2 class="slds-card__header-title">
						<a href="javascript:void(0);" class="slds-card__header-link slds-truncate" title="Accounts">
							<span>Skills</span>
						</a>
						<button @click="animate">Animate</button>
					</h2>
				</div>
			</header>
		</div>
		<div class="slds-card__body slds-card__body_inner">
			<div class="slds-text-heading_small slds-p-bottom_small">Programming Languages & Tools</div>
			<div class="slds-grid slds-wrap">
				<div
        data-sal
        ref="icons"
					v-for="tool in $static.metadata.resume.skills.tools"
					:key="tool.title"
					class="sld-col card"
				>
					<span class="title">{{ tool.title }}</span>
					<font-awesome class="skillIcon" :icon="[tool.package, tool.icon]" />
				</div>
			</div>
      <div class="slds-text-heading_small slds-p-vertical_small">Workflow</div>
      <div
					v-for="tool in $static.metadata.resume.skills.workflow"
					:key="tool"
					class="sld-col "
				>
					
					<font-awesome class="checkIcon" :icon="['fas', 'check']" />
					<span >{{ tool }}</span>

				</div>
		</div>
	</article>
</template>
<static-query>

query {
  metadata {
    resume{
      skills{
        tools{
          title
          package
          icon
        }
        workflow
      }
    }
  }
}
</static-query>

<script>
import gsap from "gsap";
import sal from "sal.js";


export default {
	data() {
		return {
		};
	},
	mounted() {
    sal();
    
    this.$refs.icons.focus().addEventListener('sal:in', ({ detail }) => {
      console.log('entering', detail.target);
      animate();
    });
		gsap.from(".card", {
			duration: 0.5,
			opacity: 0,
			scale: 0,
			y: 200,
			ease: "power1",
			stagger: {
				each: 0.1,
				from: "center"
			}
		});
	},
	methods: {
		animate() {
			gsap.from(".card", {
				// duration: 0.5,
				// opacity: 0,
				// scale: 0,
				// y: 200,
				// ease: "power1",
				// stagger: {
				// 	each: 0.1,
				// 	from: "center"
				// }
				/** Another Stagger */
				duration: 2,
				scale: 0.5,
				opacity: 0,
				delay: 0.5,
				stagger: 0.2,
				ease: "elastic",
				force3D: true
			});
		}
	}
};
</script>
<style scoped>
.card {
	height: 6.5em;
	width: 5.5em;
	border-radius: 1%;
	background-color: white;
	/* background-color: #16c0b0; */
	/* box-shadow: 0.08em 0.03em 0.4em #ababab; */
	padding-top: 0.5em;
	margin-top: 0.5em;
	margin-right: 0.5em;
}
.skillIcon {
	height: 3rem;
	width: 3rem;
	color: teal;
	margin-left: 0.5em;
}
.checkIcon {
	height: 0.9rem;
	width: 0.9rem;
	color: lightgreen;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
.title {
	text-align: center;
	height: 0.5em;
	margin-left: 0.5em;
}
</style>