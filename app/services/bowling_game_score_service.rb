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
end