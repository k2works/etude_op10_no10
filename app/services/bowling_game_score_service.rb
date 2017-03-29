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

  def self.save_form(params)
    form = self.setup_calculate_form(params)
    score = Score.new(form.to_hash)
    score.save!
  end

  def self.search_form
    score = Score.all.last
    unless score.nil?
      self.setup_calculate_form(score)
    end
  end
end