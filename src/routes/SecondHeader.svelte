<!-- SecondHeader.svelte -->
<script>
  // Any JavaScript code needed for interaction can be added here
</script>

<div class="SecondHeader">
  <div class="Container">
    <div class="Content">
      <div class="ContentContainer">
        <div class="Content">
          <div class="Heading">Dynamisez votre entreprise avec un site web professionnel</div>
          <div class="Text">Un site web professionnel peut aider votre petite entreprise à se développer et à attirer davantage de clients. Il établit une présence en ligne forte, met en valeur vos produits ou services et renforce votre crédibilité.</div>
        </div>
        <div class="Actions">
          <div class="ButtonContainer primary">
            <div class="Button">Contactez-moi</div>
          </div>
          <div class="ButtonContainer secondary">
            <div class="Button">Voir mon travail</div>
          </div>
        </div>
      </div>
    </div>
    <img class="BoardAsset" src="https://via.placeholder.com/448x656" alt="Placeholder Image" />
  </div>
</div>

<style>
  .SecondHeader {
    width: 1440px;
    height: 880px;
    padding: 112px 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 80px;
  }

  .Container {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 80px;
  }

  .Content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .ContentContainer {
    align-self: stretch;
    height: 282px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .Heading {
    color: white;
    font-size: 48px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    line-height: 57.60px;
    word-wrap: break-word;
  }

  .Text {
    color: white;
    font-size: 18px;
    font-family: 'Acme', sans-serif;
    font-weight: 400;
    line-height: 27px;
    word-wrap: break-word;
  }

  .Actions {
    padding-top: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
  }

  .ButtonContainer {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .ButtonContainer.primary {
    background: rgba(255, 255, 255, 0.20);
    backdrop-filter: blur(200px);
  }

  .ButtonContainer.secondary {
    border: 1px solid rgba(255, 255, 255, 0.20);
  }

  .Button {
    color: white;
    font-size: 16px;
    font-family: 'Segoe UI', sans-serif;
    line-height: 24px;
    word-wrap: break-word;
  }

  .BoardAsset {
    width: 448px;
    height: 656px;
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
</style>
