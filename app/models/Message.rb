class Message < ApplicationRecord
  validates :body, presence: true
  validates :slack_team_name, presence: true
  validates :slack_channel_name, presence: true
end
