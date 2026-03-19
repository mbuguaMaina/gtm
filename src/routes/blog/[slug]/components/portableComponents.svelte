<script module lang="ts">
	import PortableCode from "./portableCode.svelte";
	import PortableHeading from "./PortableHeading.svelte";
	import PortableImage from "./portableImage.svelte";
	import PortableLink from "./portableLink.svelte";
	import PortableQuote from "./portableQuote.svelte";

 

export const portableComponents = {

  types: {
    image: PortableImage,
    code: PortableCode
  },

  block: {
    h1: PortableHeading,
    h2: PortableHeading,
    h3: PortableHeading,
    h4: PortableHeading,
    blockquote: PortableQuote
  },

  marks: {
    link: PortableLink
  }
}

</script>