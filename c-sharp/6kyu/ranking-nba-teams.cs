using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class Nba 
{
    private static Dictionary<string, NBATeam> league;

    public static string NbaCup(string resultSheet, string toFind) 
    {
        if (String.IsNullOrEmpty(toFind)) return "";
    
        league = new Dictionary<string, NBATeam>();
    
        string[] results = resultSheet.Split(new char[]{','});
        foreach (string result in results)
        {
          try
          {
            TallyResult(result);
          }
          catch( ArgumentException)
          {
            return $"Error(float number):{result}";
          }
        }
        
        return FindTeamStats(toFind);
    }
    
    public static int GetScore(string score)
    {
      //Console.WriteLine($"score: {score}");
    
      double scoreTest = Convert.ToDouble(score);
      if (Math.Floor(scoreTest) != scoreTest)
      {
        throw new ArgumentException();
      }
      
      return Convert.ToInt32(scoreTest);
    }
    
    public static void TallyResult(string result)
    {
      string pattern = @"(.*) (\d+\.{0,1}\d+) (.*) (\d+\.{0,1}\d+)";
      Match m = Regex.Match(result, pattern);
      
      if (m.Success)
      {
        string team1 = m.Groups[1].Value;
        int team1Score = GetScore(m.Groups[2].Value);
        string team2 = m.Groups[3].Value;
        int team2Score = GetScore(m.Groups[4].Value);
        
        bool team1Win = team1Score > team2Score;
        bool gameDraw = team1Score == team2Score;
        
        if (!league.ContainsKey(team1)) league.Add( team1, new NBATeam( team1 ) );
        if (!league.ContainsKey(team2)) league.Add( team2, new NBATeam( team2 ) );
        
        if (team1Win)
        {
          league[team1].AddWin(team1Score, team2Score);
          league[team2].AddLoss(team2Score, team1Score);
        }
        else if (gameDraw)
        {
          league[team1].AddDraw(team1Score, team2Score);
          league[team2].AddDraw(team2Score, team1Score);
        }
        else
        {
          league[team1].AddLoss(team1Score, team2Score);
          league[team2].AddWin(team2Score, team1Score);          
        }
        
      }
    }
    
    public static string FindTeamStats(string name)
    {
      return league.ContainsKey(name) ? league[name].GetResults() : $"{name}:This team didn't play!";
    }
    
    public class NBATeam
    {
      public int Wins { get; set; }
      public int Draws { get; set; }
      public int Losses { get; set; }
      public int Scored { get; set; }
      public int Conceded { get; set; }
      public int Points { get; set; }
      
      public string Name { get; set; }
      
      public NBATeam(string name)
      {
        Name = name;
      }
      
      public void AddWin(int pointsFor, int pointsAgainst)
      {
        Wins++;
        Scored += pointsFor;
        Conceded += pointsAgainst;
        Points += 3;
      }
      
      public void AddLoss(int pointsFor, int pointsAgainst)
      {
        Losses++;
        Scored += pointsFor;
        Conceded += pointsAgainst;
      }
      
      public void AddDraw(int pointsFor, int pointsAgainst)
      {
        Draws++;
        Scored += pointsFor;
        Conceded += pointsAgainst;
        Points += 1;
      }
              
      public string GetResults()
      {
        return $"{Name}:W={Wins};D={Draws};L={Losses};Scored={Scored};Conceded={Conceded};Points={Points}";
      }

    }
}