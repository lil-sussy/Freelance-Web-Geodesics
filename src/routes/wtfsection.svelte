<!-- FeaturesSection.svelte -->
<script>
  // Script block for any necessary JavaScript
</script>

<div class="FeaturesSection">
  <div class="TitleContainer">
    <div class="LongHeadingIsWhatYouSeeHereInThisFeatureSection">
      <span>Crafting Digital Excellence</span>
      <span>Plongez dans le spectre des possibilités numériques avec des services conçus pour élever votre marque, captiver votre audience et stimuler votre succès à l'ère numérique.</span>
    </div>
    <div class="Actions">
      <div class="Button primary">Prenez contact</div>
      <div class="Button secondary">Voir mon travail</div>
    </div>
  </div>
  <div class="FeatureContainer">
    <!-- Example Feature Column -->
    <div class="Column">
      <div class="PlaceholderImage"></div>
      <div class="Content">
        <div class="SectionTitle">
          <div class="MediumLengthSectionHeadingGoesHere">Conception Web Engageante</div>
          <div class="LoremIpsumDolorSitAmet">Créez une identité en ligne unique. Nos conceptions web visuellement impressionnantes et intuitives...</div>
        </div>
        <div class="Action">
          <div class="Button small">En savoir plus</div>
        </div>
      </div>
    </div>
    <!-- Additional columns can be added in the same manner -->
  </div>
</div>

<style>
  .FeaturesSection {
    width: 1440px;
    height: 1116px;
    padding: 170px 64px 112px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 80px;
  }

  .TitleContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 19px;
  }

  .LongHeadingIsWhatYouSeeHereInThisFeatureSection {
    width: 768px;
    color: white;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    line-height: 48px;
    word-wrap: break-word;
  }

  .Actions {
    display: flex;
    align-items: flex-start;
    gap: 31px;
  }

  .Button {
    padding: 12px 24px;
    color: white;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background: rgba(255, 255, 255, 0.10);
    border: 1px solid rgba(255, 255, 255, 0.50);
  }

  .FeatureContainer {
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 21px;
  }

  .Column {
    flex: 1;
    padding: 30px;
    border: 1px solid rgba(255, 255, 255, 0.57);
    backdrop-filter: blur(1000px);
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .PlaceholderImage {
    align-self: stretch;
    height: 160px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20));
    border: 1px solid rgba(255, 255, 255, 0.49);
  }

  .SectionTitle, .Content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>
