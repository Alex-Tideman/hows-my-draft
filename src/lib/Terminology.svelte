<script>
</script>

<div class="placeholder">
  <div class="placeholder-icon"><span class="icon"><i class="fa fa-wrapper fa-coffee x-large"></i></span></div>
  <h6 class="placeholder-title">Terminology</h6>
  <div class="u-text-left">
    <p class="question">What is a DraftScore?</p>
    <p>DraftScore is my very sophisticated algorithm to determine the performance of a draft pick. The only two factors that matter are points scored and draft cost. No predictions, no involving luck factors such as your weekly opponents, just facts. To determine a DraftScore, you need to calculate a player's AvgPointsDiff and CostMultiplier.</p>
    <p class="question">AvgPointsDiff</p>
    <p>How much more or less a player averages per game compared to all other players drafted at the same position.</p>
    <p class="question">CostMultiplier</p>
    <p>Ratio of how cheap a player was drafted compared to the average cost of all players drafted at the same position.</p>
    <p class="subquestion">Example:</p>
    <p>Let's say Deebo Samuel is averaging 20.87 pts/game and the average pts/game for all WRs drafted is 12 pts/game.</p>
    <p>The average cost for WRs drafted was $13.54 and Deebo Samuel was drafted at $6.</p>
    <p class="subquestion">AvgPointsDiff = +8.87</p>
    <p class="subquestion">CostMultiplier = 2.26</p>
    <p class="subquestion">DraftScore = +8.87 * 2.26 = <span class="text-green-500">20</span></p>
    <p></p>
    <p class="subquestion">Another example:</p>
    <p>Let's say Saquon Barkley is averaging 5 pts/game and the average pts/game for all RBs drafted is 10 pts/game. So he is -5 pts/game.</p>
    <p>The average cost for RBs drafted was $23 and Saquon Barkley was drafted at $48</p>
    <p class="subquestion">AvgPointsDiff = -5</p>
    <p class="subquestion">CostMultiplier = .48</p>
    <p class="subquestion">DraftScore = -5 / .48 = <span class="text-red-500">-10.2</span></p>
    <p></p>
    <p>If a player has a negative AvgPointsDiff, you divide the CostMultiplier instead of multiply.</p>
  </div>
</div>

<style>
  .question {
    font-weight: bold;
    font-size: 1.15em;
    margin: 0;
  }
  .subquestion {
    font-weight: 700;
    font-size: 1.1em;
    margin: 0;
  }

.container {
  position: relative;
  padding-top: 40px;
  width: 100%;
}
</style>
