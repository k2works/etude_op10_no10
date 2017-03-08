class BowlingGameScoreService
  def self.create_from
    BowlingGameForm.new
  end

  def self.setup_form(params)
    form = BowlingGameForm.new
    form.assign_attributes(params)
    form.add
    form
  end

  def self.get_scores_for_select
    BowlingGameForm::SCORES
  end

  def self.setup_calculate_form(params)
    form = self.setup_form(params)
    form.score_for_frames
    form.score
    form
  end
end