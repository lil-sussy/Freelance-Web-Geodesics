<!-- Portfolio11.svelte -->
<script>
  // Script for any Svelte-specific logic
</script>

<div class="Portfolio11">
  <div class="SectionTitle">
    <div class="Content">
      <div class="Heading">Portfolio Highlights</div>
      <div class="Text">Découvrez mes projets phares</div>
    </div>
  </div>
  <div class="Content">
    <div class="PortfolioList">
      <div class="Row">
        <!-- Example Card -->
        <div class="Card">
          <img class="PlaceholderImage" src="https://via.placeholder.com/376x208" alt="Placeholder Image" />
          <div class="Content">
            <div class="Text">
              <div class="Heading">Ce site freelance</div>
              <div class="Text">Innover un pixel à la fois. Plongez dans le monde avant-gardiste du design web freelance...</div>
            </div>
            <div class="Tags">
              <div class="Tag">Web Design</div>
              <div class="Tag">Development</div>
              <div class="Tag">Creative</div>
            </div>
          </div>
        </div>
        <!-- More cards can be added in the same manner -->
      </div>
    </div>
  </div>
  <div class="ViewAll">
    <div class="Button">View all</div>
  </div>
</div>

<style>
  .Portfolio11 {
    width: 1440px;
    height: 1188px;
    padding: 112px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
  }

  .SectionTitle, .Content, .PortfolioList, .Row, .Card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 64px;
  }

  .Heading {
    text-align: center;
    color: white;
    font-size: 48px;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    line-height: 57.60px;
    word-wrap: break-word;
  }

  .Text {
    text-align: center;
    color: white;
    font-size: 18px;
    font-family: 'Acme', sans-serif;
    font-weight: 400;
    line-height: 27px;
    word-wrap: break-word;
    width: 473px;
  }

  .Card {
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.49);
    gap: 24px;
  }

  .PlaceholderImage {
    align-self: stretch;
    height: 208px;
    opacity: 0.80;
  }

  .Tag {
    padding: 4px 8px;
    background: #444444;
    color: white;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    line-height: 21px;
    display: flex;
    align-items: center;
  }

  .Button {
    padding: 12px 24px;
    border: 1px solid rgba(255, 255, 255, 0.50);
    color: white;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
    justify-content: center;
    display: flex;
  }
</style>
